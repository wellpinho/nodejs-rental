import express from "express";

import { categoryRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use(categoryRoutes);

app.listen(4000, () => console.log("Server running on port 4000"));
