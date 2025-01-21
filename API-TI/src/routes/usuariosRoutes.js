import Express from "express";
import usuarioController from "./../controllers/usuarioController.js";


const router = Express.Router();

router.post("/crear", usuarioController.guardarNuevoUsuario);

router.get('/buscar/:idUsuario',usuarioController.buscarUsuarioPorID)

router.get('/buscar/email/:usuarioEmail', usuarioController.buscarUsuarioPorEmail)

router.get('/buscarTodos', usuarioController.buscarTodos)

router.put('/actualizar/:idUsuario', usuarioController.actualizaUsuarioCompleto)

router.patch('/actualizar/:usuarioID/atributo/:nombreAtributo/nuevoValor/:valorAtributo', usuarioController.actualizaUsuarioCampo)


router.delete('/borrar/:usuarioID', usuarioController.borrarUsuarioPorID)

router.delete('/borrar/:usuarioEmail', (request, response) => {
  console.log(`Se ha solicitado la eliminacion de USUARIO con EMAIL: ${request.params.usuarioEmail}`)
  response.json({
    estatus: "Solicitud Recibida",
    mensaje: `Se ha solicitado la eliminacion de USUARIO con EMAIL: ${request.params.usuarioEmail}`
  })
})

router.post('/login', usuarioController.loginUsuario)
export default router