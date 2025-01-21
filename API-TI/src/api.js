import express from 'express'
import generalRoutes from './routes/generalRoutees.js'
import usuarioRoutes from './routes/usuariosRoutes.js'
import comentarioRoutes from './routes/comentariosRoutes.js'
import servicioRoutes from './routes/servicioRoutes.js'
import db from "./config/db.js"
import cors from 'cors'
import citaRoutes from './routes/citaRoutes.js'

//64000 Puertos disponibles
//0-1024
//3306,4200,80,2022,2023 YA UTILIZADOS

const apiServer = express();
apiServer.use(cors());
const port=3000;

apiServer.use(express.json())
apiServer.use("/",generalRoutes)
apiServer.use("/usuarios",usuarioRoutes)
apiServer.use("/comentarios",comentarioRoutes)
apiServer.use("/servicios",servicioRoutes)
apiServer.use("/citas",citaRoutes)
apiServer.use(express.urlencoded({extended:true})) //esta configuracion permite recuperar los datos recibidos dentro de las peticiones o formulacion de quienes consuman la API

try {
    console.log('verificando las credenciales para la conexion a la base de datos')
    await db.authenticate();
    console.log('conexion exitosa a la base de datos')
    console.log('sincronizando el modelo logico con el modelo fisico')
    db.sync()
} catch (error) {
    console.log(error)
}

apiServer.listen(port,()=>{
    console.log(`El api ha sido iniciada en el puerto: ${port}`)
})