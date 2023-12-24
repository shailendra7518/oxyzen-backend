import React from "react";

const PageNotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          404 - Not Found
        </h1>
        <p className="text-lg text-gray-600">
          Oops! The page you are looking for doesn't exist.
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
