const {Schema, model} = require('mongoose');


const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    last_name: {
        type: String,
        required: [true, 'El Apellido es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio'],
    },
}, {versionKey: false});

module.exports = model('User', UserSchema);