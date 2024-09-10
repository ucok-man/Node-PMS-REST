export interface IServerConfig {
  port?: number;
  host?: string;
  db_config?: {
    db?: string;
    username?: string;
    password?: string;
    host?: string;
    port?: number;
    dbname?: string;
  };
}
