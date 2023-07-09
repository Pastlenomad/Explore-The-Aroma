import express from "express";
import cors from "cors";
import router from "./router";
import compression from "compression";
function createServer() {
  const app = express();
  app.use(cors());
  app.use(compression());

  app.use(router);

  app.use(express.json());
  return app;
}

export default createServer;
