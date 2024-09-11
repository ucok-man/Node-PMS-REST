import { DataSource } from "typeorm";
import config from "../../server_config.json";
import { Comment } from "../components/comments/comment_entity";
import { Project } from "../components/projects/projects_entity";
import { Role } from "../components/roles/roles_entity";
import { Task } from "../components/tasks/tasks_entity";
import { User } from "../components/users/users_entity";
import { IServerConfig } from "./config";

export class DatabaseUtils {
  public server_config: IServerConfig = config;

  constructor() {
    this.connectDatabase();
  }

  private connectDatabase() {
    try {
      const db_config = this.server_config.db_config;
      const AppDataSource = new DataSource({
        type: "postgres",
        host: db_config.host,
        port: db_config.port,
        username: db_config.username,
        password: db_config.password,
        database: db_config.dbname,
        entities: [Role, User, Project, Task, Comment],
        synchronize: true,
        logging: false,
      });
      AppDataSource.initialize()
        .then(() => {
          console.log("Database initialized");
        })
        .catch((error) => {
          console.log(`Error connecting to database: ${error}`);
        });
    } catch (error) {
      console.log(`Error connecting to database: ${error}`);
    }
  }
}
