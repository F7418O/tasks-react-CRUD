import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { openConnection } from "./connection-db";
import routes from "./routes/routes";

const app = express()
openConnection()// Connection !

app.use(cors()) // Malditooo CORSSS
app.use(morgan('dev'))
app.use(express.json())// Revisar ... 
app.use('/api', routes)


app.set('port', 8040)
app.listen(app.get('port'), ()=>{
    console.log(`Listening on port ${app.get('port')}`)
})