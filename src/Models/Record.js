const { Schema, model } = require('mongoose');

const recordSchema = new Schema({
    artist: {type: String},
    name: {type: String},
    year: {type: Number},
    price: {type: Number, required: true},
    
})

const recordModel = new model('Record', recordSchema, 'records');

module.exports = recordModel;