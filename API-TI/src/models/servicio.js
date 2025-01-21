import { DataTypes } from 'sequelize'
import db from '../config/db.js'
import Usuario from './Usuario.js'

const Servicio = db.define("servicio", {
    idServicio: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    usuarioID: {
        type: DataTypes.STRING, // Cambiado a STRING
        allowNull: false,
        references: {
            model: Usuario,
            key: 'idUsuario',
        },
    },
    nombreServicio: {
        type: DataTypes.STRING, //orm -> varchar
        allowNull: false,
    },
    tipoServicio:{
        type:DataTypes.ENUM('In Situ','Lugar'),
        allowNull:false
    },
    terminos:{
        type:DataTypes.STRING,
        allowNull:false
    },
    condiciones:{
        type:DataTypes.STRING,
        allowNull:false
    },
    
    

    //ENUM--tipo de servicio

    //STRING TERMINOS 
    //STRING CONDICIONES
    //ID USUARIO_PROVEDOR
    //COSTO
    //ESTATUS -- BOOLEANO 1-0
    costo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
})
Servicio.belongsTo(Usuario, { foreignKey: 'usuarioID' });
export default Servicio;