import Express, { request, response } from 'express';
import servicioController from '../controllers/servicioController.js';
import usuarioController from '../controllers/usuarioController.js';

const router = Express.Router();

router.post('/crear', servicioController.guardarNuevoServicio)

router.get('/buscar/:servicioID', servicioController.buscarServicioPorID )


router.get('/buscarTodos', servicioController.buscarTodos)

router.put('/actualizar/:servicioID', servicioController.actualizaServicioCompleto)

router.patch('/actualizar/:empresaID/atributo/:nombreAtributo/nuevoValor/valorAtributo', (request, response) => {
    console.log(`Se ha solicitado una actualización específica del atributo: ${request.params.nombreAtributo} con el nuevo valor de: ${request.params.valorAtributo} del USUARIO`)
    response.json({ estatus: "Solicitud recibida", mensaje: `Se ha solicitado una actualización específica del atributo: ${request.params.nombreAtributo} con el nuevo valor de: ${request.params.valorAtributo} del USUARIO` })
})

router.delete('/borrar/:servicioID', servicioController.borrarServicioPorID)


router.get('/usuarios/:usuarioID/servicios', servicioController.serviciosUsuario);
export default router;