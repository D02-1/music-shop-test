const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    ordernumber: {type: Number,unique:true },
    shipment: {type: String},
    location: {type: String },
    updated: { type: Date, default: Date.now }
});

const orderModel = new model('Order', orderSchema, 'orders');

module.exports = orderModel;
