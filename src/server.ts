import express from "express";
import { Server } from "http";
import config from "../server_config.json";
import { Routes } from "./routes";
import { IServerConfig } from "./utils/config";

export class ExpressServer {
  private static server: Server | null = null;
  public sever_config: IServerConfig = config;

  constructor() {
    const port = this.sever_config.port ?? 3000;

    const app = express();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.get("/ping", (_req, res) => {
      res.send("pong");
    });

    console.log("Initializing routes...");
    new Routes(app);

    ExpressServer.server = app.listen(port, () => {
      console.log(`Server running at port ${port} with pid ${process.pid}`);
    });
  }

  public closeServer(): void {
    ExpressServer.server?.close(() => {
      console.log("Server closed");
      process.exit(0);
    });
  }
}
