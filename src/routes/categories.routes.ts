import { Router } from "express";

const categoryRoutes = Router();
const category = [];

categoryRoutes.post("/categories", (req, res) => {
  const { name, description } = req.body;

  category.push({
    name,
    description,
  });

  return res.status(201).json(category);
});

export { categoryRoutes };
