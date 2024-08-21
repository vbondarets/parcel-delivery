import { Application } from "express";
import authRouter from "./api/auth.router";

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.get("/api", (_req, res) => {
      res.send("API Running");
    });
    this.app.use("/api/auth", authRouter);
  }
}

export default AppRouter;
