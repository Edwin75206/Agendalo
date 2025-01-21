import Express  from "express";
import citaController from "../controllers/citaController.js";

const router = Express.Router();

router.post('/crear', citaController.guardarNuevaCita)


router.get('/buscarTodos', citaController.buscarTodos)
  
export default router