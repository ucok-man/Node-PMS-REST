import { Express } from "express";
import { UserControllers } from "./users_controller";

export class UserRoutes {
  private baseEndpoint = "/api/users";

  constructor(app: Express) {
    const controller = new UserControllers();
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
