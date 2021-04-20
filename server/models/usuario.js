const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
};

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Mdb El nombre es nesesario'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Mdb El email es nesesario']
    },
    password: {
        type: String,
        required: [true, 'Mdb La contraseña es nesaria']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        enum: rolesValidos,
        default: 'USER_ROLE',
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

usuarioSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} debe ser unico'
})

module.exports = mongoose.model('Usuario', usuarioSchema);

