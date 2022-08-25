import { AppDataSource } from "./data-source";
import express from "express";
import routes from "./routes";

AppDataSource.initialize().then(() => {
  const app = express();
  app.use(express.json(), routes);

  return app.listen(process.env.PORT);
});
