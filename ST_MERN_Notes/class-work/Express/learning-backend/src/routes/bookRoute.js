import express from "express";
import createNewBook from "../controllers/bookController";
import { validate } from "../validators/bookValidator.js";
import { createBookSchema } from "../validators/bookValidator.js";

const bookRouter = express.Router();

bookRouter.post("/", validate(createBookSchema),createNewBook);
//bookRouter.put("/:id");

export default bookRouter;