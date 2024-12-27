import express, { request } from 'express'
import mongoose from 'mongoose'
import Usuarios from './models/usuario.js'

const app = express()
app.use(express.json())

app.post('/usuarios',async (request,response)=>{
    const usuario = request.body 
    const novoUsuario = await Usuarios.create(usuario) 
    return response.status(201).json(novoUsuario)
  })

app.get('/usuarios', async(req,response)=>{    
    const listaUsuarios = await Usuarios.find()
    return response.status(200).json(listaUsuarios)
})

mongoose.connect("mongodb+srv://douglasafernandes:7DZ72cdZxNzmuQUD@cluster0.pfqih.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then( () => console.log("Banco de dados conectado"))
.catch(() => console.log("Falha ao conectar no banco"))
app.listen(3000)

/*
 Api de usuarios
 Criar um usuario
 Listar todso os usuarios
 Editar um usuario
 Editar um usuario


**/