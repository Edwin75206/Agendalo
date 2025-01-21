import { DataTypes } from 'sequelize'
import db from '../config/db.js'
import Usuario from './Usuario.js'
import Servicio from './servicio.js'

const Comentario = db.define("comentario", {
    idComentario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    descripcionComentario: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    usuarioID:{
        type: DataTypes.STRING,
        allowNull:true,
        references:{
            model:Usuario,
            key:'idUsuario'
        }
    },
    servicioID:{
        type: DataTypes.STRING,
        allowNull:true,
        references:{
            model:Servicio,
            key:'idServicio'
        }
    }
});

Comentario.belongsTo(Usuario, { foreignKey: 'usuarioID', onUpdate: 'CASCADE', onDelete: 'SET NULL' });
Comentario.belongsTo(Servicio, { foreignKey: 'servicioID' });

export default Comentario;