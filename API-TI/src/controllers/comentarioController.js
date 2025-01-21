
import Comentario from "../models/Comentario.js";

const guardarNuevoComentario = async (request, response) => {


    const { descripcionComentario,  usuarioID, servicioID} = request.body
    console.log(`Con los siguientes datos:
                    USUARIO:${usuarioID},
                    SERVICIO:${servicioID},
                    DESCRIPCIÓN: ${descripcionComentario}`)

                    await Comentario.create(request.body)
                    response.json({ estatus: "Solicitud recibida", mensaje: "Se ha solicitado la creacion del comentario" 
    })
}

const buscarComentarioPorID=async (request,response)=>{
    const id=request.params.comentarioID
    console.log(`Se ha solicitado la busqueda del usuario con ID: ${id}`)
    const comentarioBuscado=await Comentario.findOne({where:{idComentario:id}})
    if (comentarioBuscado) {
        response.json(comentarioBuscado)
    } else {
      response.json({
        estatus:"Usuario no encontrado",
        mensaje:`El usuario con ID: ${id}, no s encontro`
      })
    }
  }
  const buscarTodos = async(request, response) => {
    const id = request.params.comentarioID
    console.log(`Se ha solicitado la busqueda de todos los usuarios registrados`)
  
    const comentarioBuscado = await Comentario.findAll() //SQL : SELECT * FROM usuario 
    if(comentarioBuscado)
    {
        response.json(comentarioBuscado)
    }
    else 
    {
        response.json({ estatus: "No se encontraron usuario", mensaje: `Actualmente no se encuentra ningun usuario registrado` })
    }
  };
  const borrarComentarioPorID = async (request, response) => {
    const id = request.params.comentarioID; 
    console.log(`Se ha solicitado borrar el comentario con el ID: ${id}`);
  
    try {
      const comentarioBuscado = await Comentario.findByPk(id);
  
      if (comentarioBuscado) {
        await comentarioBuscado.destroy();
        response.json({
          estatus: "Comentario Eliminado",
          mensaje: `El comentario con el ID ${id} ha sido eliminado correctamente.`
        });
      } else {
        response.json({
          estatus: "Comentario no encontrado",
          mensaje: `El comentario con el ID ${id} no se encuentra registrado.`
        });
      }
    } catch (error) {
      console.error('Error al intentar borrar el comentario:', error);
      response.status(500).json({ error: 'Error interno del servidor' });
    }
  };

  const actualizaDescripcionComentario = async (request, response) =>{ 
   console.log(`Se ha solicitado la actualización de la descripción de un comentario`);

  const { comentarioID, usuarioID, servicioID } = request.params;
  const { nuevaDescripcion } = request.body;

  try {
    const comentarioModificado = await Comentario.findOne({
      where: {
        idComentario: comentarioID,
        usuarioID: usuarioID,
        servicioID: servicioID
      }
    });

    if (comentarioModificado) {
      console.log("Comentario antes de ser modificado: ");
      console.log(comentarioModificado);

      comentarioModificado.descripcionComentario = nuevaDescripcion;

      await comentarioModificado.save();

      console.log("Comentario después de ser modificado: ");
      console.log(comentarioModificado);

      response.json(comentarioModificado);
    } else {
      response.json({
        estatus: "Comentario no encontrado",
        mensaje: `El comentario con el ID ${comentarioID} no se encuentra registrado para el usuario con ID ${usuarioID} y el servicio con ID ${servicioID}.`
      });
    }
  } catch (error) {
    console.error('Error al intentar actualizar la descripción del comentario:', error);
    response.status(500).json({ error: 'Error interno del servidor' });
  }
};


const comentariosUsuario = async (request, response) => {
  try {
    const { usuarioID } = request.params;

    const comentariosUsuario = await Comentario.findAll({
      where: {
        usuarioID: usuarioID
      }
    });

    if (comentariosUsuario.length > 0) {
      response.json(comentariosUsuario);
    } else {
      response.json({
        estatus: "No hay comentarios",
        mensaje: `El usuario con ID ${usuarioID} no ha realizado ningún comentario.`
      });
    }
  } catch (error) {
    console.error('Error al intentar obtener los comentarios del usuario:', error);
    response.status(500).json({ error: 'Error interno del servidor' });
  }
};

  
const comentariosServicio = async (request, response) => {
  try {
    const { servicioID } = request.params;

    const comentariosServicio = await Comentario.findAll({
      where: {
        servicioID: servicioID
      }
    });

    if (comentariosServicio.length > 0) {
      response.json(comentariosServicio);
    } else {
      response.json({
        estatus: "No hay comentarios",
        mensaje: `El servicio con ID ${servicioID} no ha recibido ningún comentario.`
      });
    }
  } catch (error) {
    console.error('Error al intentar obtener los comentarios del servicio:', error);
    response.status(500).json({ error: 'Error interno del servidor' });
  }
};

    export default {guardarNuevoComentario,buscarComentarioPorID,buscarTodos,borrarComentarioPorID,actualizaDescripcionComentario,comentariosUsuario,comentariosServicio}