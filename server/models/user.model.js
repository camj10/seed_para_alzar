const mongoose = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {           //  "Es una expresión regular: Hasta que sea un correo válido--Puedo ver más en regreat.com"
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlenght: [8, 'Password must be at 8 characters or longer']
    },
}, { timestamps: true });
// Validación de password, volver a escribir el password, pero no es necesario que sea otro campo aparte porque la contraseña ya tenemos y no es necesario guardarla en OTRO campo
UserSchema.virtual('confirmPassword')
.get( () => this._confirmPassword )
.set( value => this._confirmPassword = value );
UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});
UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
        this.password = hash;
        next();
        });
});
// UserSchema.plugin(uniqueValidator)
module.exports.User = mongoose.model('User', UserSchema);