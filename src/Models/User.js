const { Schema, model } = require('mongoose');
const { UserAdressSchema } = require('./UserAdressSchema');


const userSchema = new Schema({
    username: {type: String, default:"Member", unique: true},
    firstname: {type: String},
    lastname: {type: String},
    birthday:
    {
        day: Number,
        month: Number,
        year: { type: Number}
    },
    adress: UserAdressSchema
    
})

const userModel = new model('User', userSchema, 'users');

module.exports = userModel;