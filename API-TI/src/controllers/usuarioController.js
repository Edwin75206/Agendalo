
import Usuario from "../models/Usuario.js"

const guardarNuevoUsuario= async(request,response)=> {
    console.log("Se esta intentando CREAR un nuevo USUARIO...")
    const {idUsuario,nombreCompleto,correoElectronico,password,fechaNacimiento,genero,lugarProcedencia,fechaUltimavisita}=request.body //desestructuracion de objetos
    console.log(`Con los siguientes datos: 
    \n ID USUARIO: ${idUsuario},
    \n NOMBRE: ${nombreCompleto},
    \n CORREO ELECTRONICO: ${correoElectronico},
    \n CONTRASEÑA: ${password},
    \n FECHA DE NACIMIENTO: ${fechaNacimiento},
    \n GENERO: ${genero},
    \n LUGAR DE PROCENDENCIA: ${lugarProcedencia},
    \n FECHA DE ULTIMA VISITA: ${fechaUltimavisita}`)
    await Usuario.create(request.body)
    response.json({
      estatus: "Solicitud Recibida",
      mensaje: "Se esta intentando crear un nuevo USUARIO..."
    })
  
}
  

  const buscarUsuarioPorID=async (request,response)=>{
    const id=request.params.idUsuario
    console.log(`Se ha solicitado la busqueda del usuario con ID: ${id}`)
    const usuarioBuscado=await Usuario.findOne({where:{idUsuario:id}})
    if (usuarioBuscado) {
        response.json(usuarioBuscado)
    } else {
      response.json({
        estatus:"Usuario no encontrado",
        mensaje:`El usuario con ID: ${id}, no s encontro`
      })
    }
  }


  
const buscarUsuarioPorEmail = async(request, response) => {
  const usuarioEmail = request.params.usuarioEmail
  console.log(`Se ha solicitado la busqueda de un usuario por EMAIL: ${usuarioEmail}`)

  const usuarioBuscado = await Usuario.findOne({ where: { correoElectronico: usuarioEmail}}) //SQL : SELECT * FROM usuario WHERE correoElectronico = 'correoElectronicoEnviado'
  if(usuarioBuscado)
  {
      response.json(usuarioBuscado)
  }
  else 
  {
      response.json({ estatus: "Usuario no encontrado", mensaje: `El usuario con correo: ${usuarioEmail}, no se ha encontrado en la base de datos` })
  }
};


const buscarTodos = async(request, response) => {
  const id = request.params.usuarioID
  console.log(`Se ha solicitado la busqueda de todos los usuarios registrados`)

  const usuarioBuscado = await Usuario.findAll() //SQL : SELECT * FROM usuario 
  if(usuarioBuscado)
  {
      response.json(usuarioBuscado)
  }
  else 
  {
      response.json({ estatus: "No se encontraron usuario", mensaje: `Actualmente no se encuentra ningun usuario registrado` })
  }
};

const actualizaUsuarioCompleto = async(request, response) => {
  console.log('Se ha solicitado la actualización de todos los campos registrados');
  const { idUsuario, nombreCompleto, correoElectronico, password, fechaNacimiento, genero, lugarProcedencia } = request.body;

  try {
      const usuarioModificado = await Usuario.findOne({ where: { idUsuario: idUsuario } });

      if (usuarioModificado) {
          console.log('Usuario antes de ser modificado:');
          console.log(usuarioModificado);

          usuarioModificado.idUsuario = idUsuario;
          usuarioModificado.nombreCompleto = nombreCompleto;
          usuarioModificado.correoElectronico = correoElectronico;
          usuarioModificado.password = password;
          usuarioModificado.fechaNacimiento = fechaNacimiento;
          usuarioModificado.genero = genero;
          usuarioModificado.lugarProcedencia = lugarProcedencia;

          await usuarioModificado.save();

          console.log('Usuario después de ser modificado:');
          console.log(usuarioModificado);

          response.json({ estatus: 'OK', mensaje: 'Usuario actualizado correctamente', usuario: usuarioModificado });
      } else {
          response.status(404).json({ estatus: 'Error', mensaje: 'Usuario no encontrado' });
      }
  } catch (error) {
      console.error('Error durante la actualización:', error);
      response.status(500).json({ estatus: 'Error', mensaje: 'Error durante la actualización' });
  }
};

const borrarUsuarioPorID = async (request,response)=>{
  
  const id =request.params.usuarioID
  console.log(`Se ha solicitado la busqueda del USUARIO con el ID: ${id}`)
  const usuarioBuscado=await Usuario.findByPk(id)

  if (usuarioBuscado) {
    usuarioBuscado.destroy()
    response.json({
      estatus:"Usuario Eliminado",
      mensaje:`El usuario con el id${id}`
    })
  } else {
    response.json({
      estatus: "Usuario no encontrado", mensaje: `El usuario que intenta eliminar no se encuentra registrado`
    })
  }
}


const actualizaUsuarioCampo = async (request, response) => {
  const usuarioID = request.params.usuarioID;
  const atributo = request.params.nombreAtributo;
  const valorAtributo = request.params.valorAtributo;

  console.log(`Se ha solicitado una actualización específica del USUARIO: ${usuarioID} del atributo ${atributo} con el nuevo valor de ${valorAtributo}`);

  const usuarioModificado = await Usuario.findByPk(usuarioID);

  if (usuarioModificado) {
      console.log("Usuario antes de ser modificado:");
      console.log(usuarioModificado);

      switch (atributo) {
          case 'nombreCompleto':
              usuarioModificado.nombreCompleto = valorAtributo;
              break;
          case 'correoElectronico':
              usuarioModificado.correoElectronico = valorAtributo;
              break;
          case 'password':
              usuarioModificado.password = valorAtributo;
              break;
          case 'fechaDeNacimiento':
              usuarioModificado.fechaDeNacimiento = valorAtributo;
              break;
          case 'genero':
              usuarioModificado.genero = valorAtributo;
              break;
          case 'lugarProcedencia':
              usuarioModificado.lugarProcedencia = valorAtributo;
              break;
          case 'fechaUltimavisita':
              usuarioModificado.fechaUltimavisita = valorAtributo;
              break;
          default:
              return response.json({
                  status: "Error de la actualización parcial",
                  mensaje: "El campo que deseas modificar no es parte de los datos del Usuario"
              });
      }

      await usuarioModificado.save();

      console.log("Usuario después de ser modificado:");
      console.log(usuarioModificado);

      response.json(usuarioModificado);
  } else {
      response.json({
          status: "Usuario NO encontrado",
          mensaje: "El usuario que deseas modificar no existe"
      });
  }}

  
const loginUsuario = async (request, response) => {
  const { correoElectronico, password } = request.body;

  try {
    // Busca al usuario por correo electrónico
    const usuario = await Usuario.findOne({ where: { correoElectronico } });

    if (!usuario) {
      return response.status(401).json({ mensaje: 'Usuario no encontrado' });
    }

    // Compara la contraseña proporcionada con la almacenada en la base de datos
    if (password !== usuario.password) {
      return response.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }

    // En este punto, el inicio de sesión es exitoso
    // Devuelve el usuario con su idUsuario al cliente
    response.json({ idUsuario: usuario.idUsuario, mensaje: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    response.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

  export default {guardarNuevoUsuario,buscarUsuarioPorID,buscarUsuarioPorEmail, buscarTodos, actualizaUsuarioCompleto,borrarUsuarioPorID,actualizaUsuarioCampo,loginUsuario}