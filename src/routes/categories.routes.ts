import { Response, Request, Router } from "express";

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/categories", (request: Request, response: Response) => {
  const { name, description } = request.body;

  categories.push({
    name,
    description,
  });

  return response
    .status(201)
    .json({ message: "Category created successfully!" });
});

export { categoriesRoutes };
