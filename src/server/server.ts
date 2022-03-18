//import swaggerUi from "swagger-ui-express";
import { createConnections } from "typeorm";
import app from "../app";
import { config } from "dotenv";
import morgan from "morgan";

export default class Server {
  public port: number;

  constructor(port: number) {
    this.port = port;
    config();
  }

  static init(port: number) {
    return new Server(port);
  }

  start(callback: () => void) {
    this.connect()
      .then(() => {
        app.use(morgan('combined'));
        app.listen(this.port, callback);
      })
      .catch((err) => console.error(err));
  }

  private async connect() {
    return await createConnections();
  }
}
