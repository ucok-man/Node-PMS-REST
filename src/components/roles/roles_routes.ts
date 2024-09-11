import { Express } from "express";
import { RoleControllers } from "./roles_controller";

export class RoleRoutes {
  private baseEndpoint = "/api/roles";

  constructor(app: Express) {
    const controller = new RoleControllers();
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
