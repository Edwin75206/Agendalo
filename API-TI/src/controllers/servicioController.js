import Servicio from "../models/servicio.js";

const guardarNuevoServicio = async (request, response) => {
    const {
      idServicio,
      usuarioID,
      nombreServicio,
      tipoServicio,
      terminos,
      condiciones,
      costo,
      descripcion
    } = request.body

    console.log(`Con los siguientes datos 
                Id DEL SERVICIO ${idServicio},
                USUARIO ID: ${usuarioID},
                 NOMBRE DEL SERVICIO ${nombreServicio},
                 TIPO DE SERVICIO: ${tipoServicio},
                 TERMINOS: ${terminos},
                 CONDICIONES: ${condiciones},
                 COSTO: ${costo},
                 DESCRIPCION: ${descripcion}`)

                 await Servicio.create(request.body)

    response.json({ estatus: "Solicitud recibida", mensaje: "Se ha solicitado la búsqueda de una empresa" 
    })};

    
  const buscarServicioPorID=async (request,response)=>{
    const id=request.params.servicioID
    console.log(`Se ha solicitado la busqueda del usuario con ID: ${id}`)
    const sevicioBuscado=await Servicio.findByPk(id)
    if (sevicioBuscado) {
        response.json(sevicioBuscado)
    } else {
      response.json({
        estatus:"Usuario no encontrado",
        mensaje:`El usuario con ID: ${id}, no s encontro`
      })
    }
  }
  const buscarTodos = async(request, response) => {
    const id = request.params.servicioID
    console.log(`Se ha solicitado la busqueda de todos los usuarios registrados`)
  
    const sevicioBuscado = await Servicio.findAll() //SQL : SELECT * FROM usuario 
    if(sevicioBuscado)
    {
        response.json(sevicioBuscado)
    }
    else 
    {
        response.json({ estatus: "No se encontraron usuario", mensaje: `Actualmente no se encuentra ningun usuario registrado` })
    }
  };

  
const borrarServicioPorID = async (request,response)=>{
  
  const id =request.params.servicioID
  console.log(`Se ha solicitado la busqueda del USUARIO con el ID: ${id}`)
  const sevicioBuscado=await Servicio.findByPk(id)

  if (sevicioBuscado) {
    sevicioBuscado.destroy()
    response.json({
      estatus:"Servicio Eliminado",
      mensaje:`El servicio con el id${id}`
    })
  } else {
    response.json({
      estatus: "Servicio no encontrado", mensaje: `El usuario que intenta eliminar no se encuentra registrado`
    })
  }
}

const actualizaServicioCompleto = async (request, response) => {
  console.log(`Se ha solicitado la actualización de todos los campos registrados para el servicio`);
  const { idServicio, usuarioID, nombreServicio, tipoServicio, terminos, condiciones, costo, descripcion } = request.body;

  const servicioModificado = await Servicio.findOne({ where: { idServicio: idServicio } });

  if (servicioModificado) {
    console.log("Servicio antes de ser modificado: ");
    console.log(servicioModificado);

    servicioModificado.idServicio = idServicio;
    servicioModificado.usuarioID = usuarioID;
    servicioModificado.nombreServicio = nombreServicio;
    servicioModificado.tipoServicio = tipoServicio;
    servicioModificado.terminos = terminos;
    servicioModificado.condiciones = condiciones;
    servicioModificado.costo = costo;
    servicioModificado.descripcion = descripcion;

    await servicioModificado.save();

    console.log("Servicio después de ser modificado: ");
    console.log(servicioModificado);

    response.json(servicioModificado);
  } else {
    response.json({ estatus: "Servicio no encontrado", mensaje: `El servicio que intenta modificar no se encuentra registrado` });
  }
};
const serviciosUsuario = async (request, response) => {
  try {
    const { usuarioID } = request.params;

    const serviciosUsuario = await Servicio.findAll({
      where: {
        usuarioID: usuarioID
      }
    });

    if (serviciosUsuario.length > 0) {
      response.json(serviciosUsuario);
    } else {
      response.json({
        estatus: "No hay servicios",
        mensaje: `El usuario con ID ${usuarioID} no tiene ningún servicio registrado.`
      });
    }
  } catch (error) {
    console.error('Error al intentar obtener los servicios del usuario:', error);
    response.status(500).json({ error: 'Error interno del servidor' });
  }
};


    export default {guardarNuevoServicio,buscarServicioPorID,buscarTodos,borrarServicioPorID,actualizaServicioCompleto,serviciosUsuario}