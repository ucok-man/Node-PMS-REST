import cluster from "cluster";
import { ExpressServer } from "./server";

const server = new ExpressServer();

process.on("uncaughtException", (error: Error) => {
  console.log(`Uncaught exception in worker process ${process.pid}: `, error);

  // close any open connections or resources
  server.closeServer();

  setTimeout(() => {
    cluster.fork();
    cluster.worker?.disconnect();
  }, 1000);
});

// Gracefully handle termination signals
process.on("SIGTERM", () => {
  console.log("Received SIGINT signal");
  // Close any open connections or resources
  server.closeServer();
});

process.on("SIGTERM", () => {
  console.log("Received SIGTERM signal");
  // Close any open connections or resources
  server.closeServer();
});
