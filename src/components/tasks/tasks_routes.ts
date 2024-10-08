import { Express } from "express";
import { TaskControllers } from "./tasks_controller";

export class TaskRoutes {
  private baseEndpoint = "/api/tasks";

  constructor(app: Express) {
    const controller = new TaskControllers();
    app
      .route(this.baseEndpoint)
      .get(controller.getAllHandler)
      .post(controller.addHandler);

    app
      .route(this.baseEndpoint + "/:id")
      .get(controller.getByIdHandler)
      .put(controller.updateHandler)
      .delete(controller.deleteHandler);
  }
}
