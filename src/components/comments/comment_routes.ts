import { Express } from "express";
import { CommentControllers } from "./comment_controller";

export class CommentRoutes {
  private baseEndpoint = "/api/comments";

  constructor(app: Express) {
    const controller = new CommentControllers();
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
