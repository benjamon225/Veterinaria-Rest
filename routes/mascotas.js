const express = require('express')
const router = express.Router()


const mascotaController = require('../controllers/mascotaController');
const veterinarioController = require('../controllers/veterinarioController');
const userController = require('../controllers/userController');

//**********************rutas mascotas***************/


//mostrar las mascotas
router.get('/mascotas', mascotaController.mostrar)

//registrar mascota
router.post('/crear', mascotaController.crear)

//editar info
router.post('/editar',mascotaController.editar)

//Borrar mascota (GET)
router.get('/borrar/:id', mascotaController.borrar)

//info completa
router.get('/info/:id', mascotaController.info)

//edit
//info completa
router.get('/edit/:id', mascotaController.edit)





//*************rutas veterianrio***************** */


//mostrar veterinarios
router.get('/veterinarios', veterinarioController.mostrarV)

//resgistrar
router.post('/crearV', veterinarioController.crearV)

//eliminar
router.delete('/borrarVeterinario/:id', veterinarioController.borrar)

//visualizar para editar
router.get('/editV/:id',veterinarioController.edit)

//editar info
router.post('/editarVeterinario/:id',veterinarioController.editarV)


module.exports = router


//*************rutas usuario***************** */


router.get('/register', (req, res)=>{
    res.render('register')
})

//registro
router.post('/registrar', userController.registrar)

//loguin
router.post('/loguin', userController.loguin)