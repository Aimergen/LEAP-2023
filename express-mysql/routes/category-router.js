import express from "express";
import {
  getCategories,
  createCategory,
  deleteCategories,
  sortCategories,
  updateCategories,
} from "../services/category-service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getCategories());
});

router.get("/id", async (req, res) => {
  const { id } = req.body;
  try {
    const result = await sortCategories(id);
    res.json(result);
  } catch (err) {
    res.status(400).json(" sort hiij cadsangui");
  }
});

router.post("/", async (req, res) => {
  const { name, slug, imageAddress } = req.body;
  try {
    // const result = await createCategory(name, slug, imgUrl)
    res.json(await createCategory(name, slug, imageAddress));
  } catch (err) {
    res.status(400).json("Something went wrong");
  }
});

router.delete("/", async (req, res) => {
  const { id } = req.body;
  try {
    const result = await deleteCategories(id);
    res.json(result);
  } catch (err) {
    res.status(400).json(" Ustgaj cadsangui");
  }
});

router.put("/", async (req, res) => {
  const { id, name, slug, imageAddress } = req.body;
  try {
    const result = await updateCategories(name, slug, imageAddress, id);
    res.json(result);
  } catch (err) {
    res.status(400).json("Update hiij cadsangui ");
  }
});

export default router;
