const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log('Conectado con exito');  
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD');
    }

}

module.exports = {
    dbConnection
}