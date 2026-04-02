import { Router } from "express";
import * as mensagemController from "../controllers/mensagemController.js";

const router = Router();

router.get("/", mensagemController.getMensagens);

export default router;