import Express from "express";

const router = new Express.Router();
router.get("/", (request,response)=>{
    response.json("Bienvenido al API para la Tarea Integradora")
})

export default router

