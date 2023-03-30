const { Seed } = require("../models/seed.model");

module.exports.index = (request, response) => {
    response.json({
        message: "Gestion de semillas"
    });
}

module.exports.createSeed = async (request, response) => {
    try {
        let { fecha,variedad,semilla,cantidad,stockcritico, descripcion } = request.body;
        console.log(request.usuario);
        //let ultimoValor =// await Seed.findOne({}, {}, {// sort: { '_id' : -1 } });
        const seed = await Seed.create({
            fecha,
            variedad,
            semilla,
            cantidad,
            stockcritico,
            descripcion
        });
        response.json(seed);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

// module.exports.getAllSeed = async (request, response) => {
//     try {
//         const seeds = await Seed.find({})
//         response.json(seeds);
//     } catch (error) {
//         response.status(400);
//         response.json(error);
//     }
// }

module.exports.getAllSeed = async (req, res) => {
    try {
        const resultado = await User.find({_id:req.usuarios._id},'seed').populate('seed')
        console.log(req.usuarios)
        res.json(resultado);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getSeed = async (request, response) => {
    try {
        const data = await Seed.findOne({_id:request.params.id})
        response.json(data);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}


module.exports.updateSeed = async (request, response) => {
    try {
        const data = await Seed.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        response.json(data);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.deleteSeed = async (request, response) => {
    try {
        const data = await Seed.deleteOne({ _id: request.params.id })
        response.json(data);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.updateCantidad = async (request, response) => {
    try {
        const selec = await Seed.findOne({_id:request.params.id})
        const data = await Seed.findOneAndUpdate({_id: request.params.id}, {'cantidad':( Number(request.body.cantidad)+Number(selec.cantidad))}, {new:true})
        response.json(data);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}