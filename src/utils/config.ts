export interface IServerConfig {
  port: number;
  db_config: {
    username: string;
    password: string;
    host: string;
    port: number;
    dbname: string;
  };
}
