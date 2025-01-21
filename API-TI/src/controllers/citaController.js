
import Cita from "../models/cita.js";
import cita from "../models/cita.js";

const guardarNuevaCita = async (request, response) => {


    const { usuarioID, servicioID, horario,dia} = request.body
    console.log(`Con los siguientes datos:
                    USUARIO:${usuarioID},
                    SERVICIO:${servicioID},
                    HORARIO:${horario},
                    DIA:${dia}`)

                    await cita.create(request.body)
                    response.json({ estatus: "Solicitud recibida", mensaje: "Se ha solicitado la creacion de una nueva Cita" 
    })
}

const buscarTodos = async(request, response) => {
    const id = request.params.idCita
    console.log(`Se ha solicitado la busqueda de todos los usuarios registrados`)
  
    const citaBuscada = await Cita.findAll() //SQL : SELECT * FROM usuario 
    if(citaBuscada)
    {
        response.json(citaBuscada)
    }
    else 
    {
        response.json({ estatus: "No se encontraron usuario", mensaje: `Actualmente no se encuentra ningun usuario registrado` })
    }
  };

export default {guardarNuevaCita,buscarTodos}