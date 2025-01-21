import { DataTypes } from 'sequelize'
import db from '../config/db.js'
import Usuario from './Usuario.js'
import Servicio from './servicio.js'

const Cita = db.define("cita", {
    idCita: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
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
    },
    horario: {
      type: DataTypes.ENUM('09:00-12:00', '12:00-15:00', '15:00-18:00', '18:00-21:00'),
      allowNull: false,
    },
    dia: {
      type: DataTypes.ENUM('lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'),
      allowNull: false,
    },
});

Cita.belongsTo(Usuario, { foreignKey: 'usuarioID', onUpdate: 'CASCADE', onDelete: 'SET NULL' });
Cita.belongsTo(Servicio, { foreignKey: 'servicioID' });

export default Cita;