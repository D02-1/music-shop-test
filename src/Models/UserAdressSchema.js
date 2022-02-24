const { Schema, model } = require('mongoose');

const UserAdressSchema = new Schema({
    street: String,
    postalcode: Number,
    number: Number,
    city: String,
    
    
},
{
    timestamps: true,
    _id: false
});

const UserAdressSchemaModel = new model('UserAdressSchema', UserAdressSchema, 'userAdresses');

module.exports = { UserAdressSchema, UserAdressSchemaModel }