import { Sequelize } from "sequelize";
// import env from "./env";
import session from "express-session";
import SequelizeStore from "connect-session-sequelize";
import dotenv from "dotenv";
dotenv.config();

// Create a new Sequelize instance for database connection
const sequelize = new Sequelize(
	process.env.DATABASE_NAME,
	process.env.DATABASE_USERNAME,
	process.env.DATABASE_PASSWORD,
	{
		host: process.env.DATABASE_HOST,
		dialect: "mysql",
	},
);

// Create a Sequelize session store using the express-session store
export const SequelizeSessionStore = SequelizeStore(session.Store);

// Export the configured Sequelize instance
export default sequelize;
