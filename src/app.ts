import express from "express";
import http from "http";
import cors from "cors";
import hpp from "hpp";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import compression from "compression";
import session from "express-session";

import passport from "passport";
// import env from "@configs/env";
import sequelize, { SequelizeSessionStore } from "@configs/db";
import { Routes } from "@interfaces/routes.interface";
import passportConfig from "./configs/passport";
import errorMiddleware from "@middlewares/error.middleware";
import dotenv from "dotenv";
dotenv.config();

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;
  private server: http.Server;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = process.env.NODE_ENV || "development";
    this.port = process.env.PORT || 3000;
    this.server = http.createServer(this.app);

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorHandling();
  }

  // Establish a connection to the database
  private connectToDatabase() {
    sequelize
      .authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
        sequelize.sync();
      })
      .catch((error) => {
        console.error("Unable to connect to the database: ", error);
      });
  }

  // Configure and start the server
  public listen() {
    this.server.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  // Initialize routes for the application
  private initializeRoutes(routes: Routes[]) {
    this.app.get("/", (req, res) => {
      console.log(req.headers);
      res.send("hello from server");
    });
    routes.forEach((route) => {
      this.app.use("/api/v1", route.router);
    });
  }

  // Initialize middlewares for the application
  private initializeMiddlewares() {
    this.setupCORS();
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(express.json({ limit: "1mb" }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser(process.env.COOKIE_SECRET));

    // Configure Passport authentication
    new passportConfig(passport);

    // Configure session handling
    const sessionMiddleware = session({
      name: process.env.AUTH_COOKIE_NAME,
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      store: new SequelizeSessionStore({
        db: sequelize,
      }),
      cookie: {
        domain: process.env.COOKIE_DOMAIN,
        maxAge: 1000 * 60 * 60 * 24 * 30,
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        sameSite: "lax",
      },
    });

    this.app.set("sessionMiddleware", sessionMiddleware);

    this.app.use(sessionMiddleware);
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  // Configure Cross-Origin Resource Sharing (CORS)
  private setupCORS() {
    const origins: (boolean | string | RegExp)[] = [];
    if (["development"].includes(process.env.NODE_ENV)) {
      origins.push(`/localhost:/`);
      origins.push("http://localhost:5173");
      origins.push("http://localhost:3000");
    }
    const corsOrigins = process.env.CORS_ORIGINS.split(",");
    if (corsOrigins.length > 0) {
      origins.push(
        ...corsOrigins.map((corsOrigin) => {
          return corsOrigin.trim();
        })
      );
    }

    const corsOptions = {
      origin: origins,
      methods: ["GET", "POST", `PUT`, `PATCH`, `DELETE`],
      credentials: true,
    };

    this.app.use(cors(corsOptions));
  }

  // Initialize error handling middleware
  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;
