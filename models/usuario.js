import mongoose  from 'mongoose'
const usuarioSchema = new mongoose.Schema({
   nome :{
          type: String,
          required : true
   },
   idade:{
          type: Number,
          required : true 
   },
   email:{
          type: String,
          required : false  
   },
   dataCriacao:{
          type : Date,
          default: Date.now
   }
})

export default mongoose.model('Usuario',usuarioSchema)