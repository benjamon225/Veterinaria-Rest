const Mascota = require("../model/Mascota");



//Mostrar mascotas
module.exports.mostrar = (req, res) => {
  Mascota.find({}, (error, mascotas) => {
      if (error) {
          return res.status(500).json({
              message: "Error dando a visualizar mascotas"
          })
      }
    //   console.log(mascotas)
     return res.render('mascotas', {mascotas: mascotas})
  });
}

//registro
module.exports.crear = (req, res)=>{
    const {nombre, edad, especie, raza, diagnostico, nombre_d, apellido_d, telefono_d , email_d} = req.body;
    // console.log(req.body)
      const mascota = new Mascota({
        nombre,
        edad,
        especie,
        raza,
        diagnostico,
        duenioNombre: nombre_d,
        duenioApellido: apellido_d,
        duenioTelefono: telefono_d,
        duenioEmail: email_d
    })

    mascota.save((error, mascota)=> {
        if (error) {
            return res.status(500).json({
                message: 'Error al registrar mascota'
            })
        }
        res.redirect('/mascotas')
    })

    
    
   
}

//edicion
module.exports.editar = (req, res)=>{
     const id = req.body.id
     const nombre = req.body.nombre
     const edad = req.body.edad
    const especie = req.body.especie
    const raza = req.body.raza
    const diagnostico = req.body.diagnostico
    const duenioNombre = req.body.nombre_d
    const duenioApellido = req.body.apellido_d
    const duenioTelefono = req.body.telefono_d
    const duenioEmail = req.body.email_d

    // console.log(id, nombre, edad, especie,raza,diagnostico, dNombre, dApellido, dTelefono, dEmail);

    Mascota.findByIdAndUpdate(id,{nombre, edad, especie, raza, diagnostico, duenioNombre, duenioApellido, duenioTelefono, duenioEmail}, (error, mascota)=>{
        if (error) {
            return res.status(500).json({
                message: 'Error al editar la informacion'
            })
       
        }
        res.redirect('/mascotas')
    } )
}

//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
      Mascota.findByIdAndRemove(id, (error, mascota)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el Alumno'
            })
        }
        res.redirect('/mascotas')
    })
}

//Mostrar info completa de mascotas
module.exports.info = (req, res) => {
    const id = req.params.id
    Mascota.findById(id, (error, mascotas) => {
        if (error) {
            return res.status(500).json({
                message: "Error dando a visualizar mascotas"
            })
        }
       return res.render('info', {mascotas: mascotas})
    });
  }

//visualizar para editar
module.exports.edit = (req, res) => {
    const id = req.params.id
    Mascota.findById(id, (error, mascotas) => {
        if (error) {
            return res.status(500).json({
                message: "Error dando a visualizar mascotas"
            })
        }
       return res.render('edit', {mascotas: mascotas})
    });
  }

  module.exports
