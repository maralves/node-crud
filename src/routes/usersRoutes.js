import express from "express";
import UserController from "../controllers/usersControllers.js";


const router = express.Router();

router.get("/users", UserController.listarUsers);
router.get("/users/:id",UserController.listarUserId);
router.post("/users",UserController.cadastrarUser);
router.put('/users/:id',UserController.atualizarUser);
router.delete('/users/:id',UserController.deletarUser);

export default router;