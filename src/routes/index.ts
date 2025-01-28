import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
// import { carsRoutes } from "./cars.routes";
// import { usersRoutes } from "./users.routes";
// import { rentalsRoutes } from "./rentals.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
// router.use("/cars", carsRoutes);
// router.use("/users", usersRoutes);
// router.use("/rentals", rentalsRoutes);

export { router };
