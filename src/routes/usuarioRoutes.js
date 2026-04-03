import { Router } from "express";
import * as usuarioController from "../controllers/usuarioController.js";

const router = Router();

router.post("/", usuarioController.postUsuario);
router.get("/", usuarioController.getUsuarios);

export default router;