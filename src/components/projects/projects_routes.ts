import { Express } from "express";
import { ProjectControllers } from "./projects_controller";

export class ProjectRoutes {
  private baseEndpoint = "/api/projects";

  constructor(app: Express) {
    const controller = new ProjectControllers();
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
