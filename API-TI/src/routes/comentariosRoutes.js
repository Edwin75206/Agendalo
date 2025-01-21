import Express  from "express";
import comentarioController from '../controllers/comentarioController.js';

const router = Express.Router();

router.post('/crear', comentarioController.guardarNuevoComentario)

  router.get('/buscar/:comentarioID', comentarioController.buscarComentarioPorID)  

  router.get('/buscar/email/usuarioEmail', (request, response) => {
    console.log(`Se ha solicitado la busqueda del COMENTARIO con EMAIL: ${request.params.usuarioEmail}`)
    response.json({
      estatus: "Solicitud Recibida",
      mensaje: `Se ha solicitado la busqueda del COMENTARIO con EMAIL: ${request.params.usuarioEmail}`
    })
  })
  
  router.get('/buscarTodos', comentarioController.buscarTodos)
  
  router.put('/actualizar/:usuarioID/:servicioID/:comentarioID', comentarioController.actualizaDescripcionComentario)
  
  router.patch('/actualizar/:comentarioID/atributo/:nombreAtributo/nuevoValor/:valorAtributo', (request, response) => {
      console.log(`Se ha solicitado una actualizacion especifica del atributo:${request.params.nombreAtributo} con el nuevo valor de: ${request.params.valorAtributo} del COMENTARIO`)
      response.json({
        estatus: "Solicitud Recibida",
        mensaje:`Se ha solicitado una actualizacion especifica del atributo:  ${request.params.nombreAtributo} con el nuevo valor de: ${request.params.valorAtributo} del COMENTARIO ${request.params.comentarioID}` 
      })
    });
  
  router.delete('/borrar/:comentarioID', comentarioController.borrarComentarioPorID )
  router.get('/usuario/:usuarioID', comentarioController.comentariosUsuario)
  router.get('/servicio/:servicioID', comentarioController.comentariosServicio)


  export default router
  