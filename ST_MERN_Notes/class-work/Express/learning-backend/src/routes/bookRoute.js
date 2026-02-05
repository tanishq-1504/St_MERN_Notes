import express from "express";
import createNewBook from "../controllers/bookController.js";
import { createBookSchema } from "../validators/bookValidator.js";
import { validate } from "../middlewares/validate.js";

const bookRouter = express.Router();

bookRouter.post("/", validate(createBookSchema),createNewBook);

export default bookRouter;