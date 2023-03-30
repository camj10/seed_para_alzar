require('dotenv').config()
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors')
const puerto = process.env.PUERTO;


require('./config/mongoose.config');
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000',exposedHeaders:['sesion_token']}));
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/usuarios.routes')(app);
require('./routes/seed.routes')(app);

app.listen(puerto, () => {
    console.log("Listening at Port " + puerto)
});

