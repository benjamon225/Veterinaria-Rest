const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const saltRounds = 10

const userSchema = new Schema(
  {
    username: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    email: {type:String, required:true}
  },
  { versionKey: false }
)


// por seguirdad los metodos de loguin se desarrollan en el userSchema y se llaman en el controlador
// amtes de guardar se encripta
userSchema.pre('save', function(next){
    if(this.isNew || this.isModified('password')){
        const document = this
        bcrypt.hash(document.password, saltRounds, (err, hashedPassword)=>{
            if(err){
                next(err)
            }else{
                document.password = hashedPassword
                next()
            }
        })
    }else{
        next()
    }
})


// comparar el password ingresado con el que hay guardado
userSchema.methods.passwordCorrect = function(password, callback){
bcrypt.compare(password, this.password, function(err, same){
    if(err){
        callback(err)
    }else{
        callback(err, same)
    }
})
}



module.exports = mongoose.model('usuarios', userSchema)
