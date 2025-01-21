import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Usuario = db.define("usuario",{
    idUsuario: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    nombreCompleto:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    correoElectronico:{
        type:DataTypes.STRING,      
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false, 
    },
    fechaNacimiento:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    genero:{
        type:DataTypes.ENUM("Masculino","Femenino","No binario"),
        allowNull:false
    },
    lugarProcedencia:{
        type:DataTypes.STRING,
    }
})
export default Usuario