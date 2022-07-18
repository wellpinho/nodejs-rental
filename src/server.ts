import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json("Hello World");
});

app.post("/rentals", (req, res) => {
  const { name } = req.body;

  return res.status(200).json(name);
});

app.listen(4000, () => console.log("Server running on port 4000"));
