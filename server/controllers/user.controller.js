const { User } = require("../models/user.model");

module.exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        response.json({msg:"Usuario Registrado",user});
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

module.exports.getAllUser = async (req, res) => {
    try {
        const user = await User.find().sort({ createdAt: -1 })
        res.json(user);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

module.exports.getTop = async (req, res) => {
    try {
        const user = await User.find().sort({ totalVot: -1 }).limit(3)
        res.json(user);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

module.exports.getUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id })
        // res.cookie("mycookie", "mydata", { httpOnly: true }).json({
        //     message: "This response has a cookie"
        // });
        res.json(user);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

module.exports.logout = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id })
        res.clearCookies({msg:"Saliste correctamente"});
        res.json(user);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

module.exports.updateUser = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        console.log(req.body)
        res.json(user);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

module.exports.deleteUser = async (req, res) => {
    try {
        const persona = await User.deleteOne({ _id: req.params.id })
        res.json(persona);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}