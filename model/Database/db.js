const mongoose = require('mongoose')
const url = 'mongodb://localhost/db_veterinaria'


const dbConnection = async() => {

    try {

        await mongoose.connect(url);
    
        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}



module.exports = {
    dbConnection
}

