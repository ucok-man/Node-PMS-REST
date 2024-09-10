import express from "express";
import { Server } from "http";
import config from "../server_config.json";
import { IServerConfig } from "./utils/config";

export class ExpressServer {
  private static server: Server | null = null;
  public sever_config: IServerConfig = config;

  constructor() {
    const port = this.sever_config.port ?? 3000;
    const host = this.sever_config.host ?? "localhost";
    const app = express();

    app.get("/ping", (_req, res) => {
      res.send("pong");
    });

    ExpressServer.server = app.listen(port, () => {
      console.log(
        `Server running at http://${host}:${port} with pid ${process.pid}`,
      );
    });
  }

  public closeServer(): void {
    ExpressServer.server?.close(() => {
      console.log("Server closed");
      process.exit(0);
    });
  }
}
