import express from "express";
import { routes } from "./infra/routes";

const app = express();

app.use(express.json());

app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  next();
});

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`App is running`);
});
