const Veterinario = require("../model/Veterinario")


//Mostrar Veterinarios
module.exports.mostrarV = (req, res)=>{
    Veterinario.find({}, (error, veterinarios)=>{
        if (error) {
            return res.status(500).json({
                message: "Error al mostrar veterinarios"
            })
        }
        return res.render('veterinario', {veterinarios: veterinarios})
    });
}

//Registrar veterianrios
module.exports.crearV = (req, res)=>{
    const {rut, nombre, apellido, edad, especialidad, telefono, email} = req.body;
    // console.log(req.body)
    const veterinario = new Veterinario({
        rut,
        nombre,
        apellido,
        edad,
        especialidad,
        telefono,
        email
    })

    


    veterinario.save((error, veterinario)=> {
        if (error) {
            return res.status(500).json({
                message: 'Error al registrar personal'
            })
        }
        res.redirect('/veterinarios')
    })

}

//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Veterinario.findByIdAndRemove(id, (error, veterinario)=>{
        if (error) {
            res.status(500).json({
                message: "Error eliminando personal"
            })
        }
        res.redirect('/veterinarios')
    })
}

//Visualizar para editar
module.exports.edit = (req, res) => {
    const id = req.params.id
    Veterinario.findById(id, (error, veterinarios) => {
        if (error) {
            return res.status(500).json({
                message: "Error dando a visualizar mascotas"
            })
        }
       return res.render('editV', {veterinarios: veterinarios})
    });
  }

//editar informacion
module.exports.editarV = (req, res)=>{
    const id = req.body.id
   const rut = req.body.rut
   const nombre = req.body.nombre
   const apellido = req.body.apellido
   const edad = req.body.edad
   const especialidad = req.body.especialidad
   const telefono = req.body.telefono
   const email = req.body.email

//    console.log(rut, nombre, apellido, edad, especialidad, telefono, email)

   Veterinario.findByIdAndUpdate(id, {rut, nombre, apellido, edad, especialidad, telefono, email}, (error, veterinario)=>{
    if (error) {
        res.status(500).json({
            message: "Error al actualizar los datos"
        })
    }
    res.redirect("/veterinarios")
   })

}