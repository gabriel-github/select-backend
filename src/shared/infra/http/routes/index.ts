import { Router } from "express";
import { goalRoutes } from "./goal.routes";
import { personRoutes } from "./person.routes";

const router = Router();

router.use("/goal", goalRoutes);

router.use(personRoutes);

export { router };
