import express, { json } from "express";
import cron from "node-cron";
import welcomeUser from "./EmailService/signup";
import updateStatus from "./EmailService/status";

const app = express();
const run = () => {
  cron.schedule("*/30 * * * * *", async () => {
    console.log("Running ...");
    await welcomeUser();
    await updateStatus();
  });
};
run();

app.use(json());

app.listen(4002, () => {
  console.log("Server is running at port 4002");
});
