// const mongoose = require('mongoose');
// mongoose.set('strictQuery', false);
// mongoose.connect(process.env.MONGO_URL,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log("Established a connection to the database"))
//     .catch(err => console.log("Something went wrong when connecting to the database", err));
    const mongoose = require('mongoose'); // Importando el paquete mongoose
    mongoose.set('strictQuery', false);
    // mongodb://127.0.0.1:27017/proj
    mongoose.connect(`${process.env.MONGO_URL}/seed`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    // mongoose.connect(`mongodb://127.0.0.1:27017/proj`,{
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // })
        .then(rep => console.log('CONNECTED TO DB'))
        .catch(err => console.log('Error en DB',err))