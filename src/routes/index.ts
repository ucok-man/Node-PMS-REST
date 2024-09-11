import { Express, Router } from "express";
import { CommentRoutes } from "../components/comments/comment_routes";
import { ProjectRoutes } from "../components/projects/projects_routes";
import { RoleRoutes } from "../components/roles/roles_routes";
import { TaskRoutes } from "../components/tasks/tasks_routes";
import { UserRoutes } from "../components/users/users_routes";

export class Routes {
  public router!: Router;

  constructor(app: Express) {
    const routeClasses = [
      RoleRoutes,
      UserRoutes,
      ProjectRoutes,
      TaskRoutes,
      CommentRoutes,
    ];

    for (const routeClass of routeClasses) {
      new routeClass(app);
      console.log(`Route ${routeClass.name} - connected`);
    }
  }
}
