import { Application } from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4003;
const startServer = (api: Application) => {
  api.listen(PORT, () => {
    console.log("App is Running on port 4003");
  });
};

export default startServer;
