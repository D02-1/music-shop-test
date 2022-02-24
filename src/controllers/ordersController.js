const { now } = require('mongoose');
const Order = require('../Models/Order');

const getOrders = (req, res) =>
{
   
    Order.find({}, (err, orders) =>
    {
        if(err)
        {
            return res.status(400).json({
                success: false,
                message: err.message
            });
        }
        return res.status(200).json({
            success: true,
            data: orders
        });
        
    });
    
    
}

const getOrdersId = (req, res) =>
{
    const { id } = req.params;
    Order.find({ _id: id }, (err, orders) =>
    {
       if(err)
       {
        return res.status(400).json({
            success: false,
            message: err.message
        });
       }
       return res.status(200).json({
           success: true,
           data: orders[0]
       }) 
    })
}


const postOrders = (req, res) =>
{
    const newOrder = new Order();

    newOrder.ordernumber = 7;
    newOrder.shipment = "UPS";
    newOrder.location = "Berlin";
    newOrder.updated 

    newOrder.save((err, order) =>
    {
        if(err) throw err;
        res.status(200).json(order);
        console.log(newOrder);
    })
    
   
}



const editOrdersId = (req, res) =>
{
    const { id } = req.params;
    
    Order.findOne({ _id: id}, (err, order) =>
    {
        if(err)
        {
            return res.status(400).json({
                success: false,
                message: err.message
            })
        }
        order.ordernumber = req.body.ordernumber || order.ordernumber;
        order.shipment = req.body.shipment || order.shipment;
        order.location = req.body.location || order.location;
        order.updated = req.body.updated || order.updated;

        order.save((err, updatedOrder) =>
        {
            if(err)
            {
                return res.status(400).json({
                    success: false,
                    message: err.message
                })
            }
                return res.status(200).json({
                    success: true,
                    newData: req.body,
                    data: updatedOrder
                })

        })
    })
}

const deleteOrdersId = (req, res) =>
{
    const { id } = req.params;
    
    Order.deleteOne({ _id : id})
    .then(() =>
    {
        return res.status(200).json({
            success: true,
            message: 'Eintrag ' + id + 'gelöscht!'
        })
    
    })
    .catch(err =>
        {
            return res.status(400).json({
                success: false,
                message: err.message
                
            })
        })
}


module.exports = { getOrders, getOrdersId, postOrders, editOrdersId, deleteOrdersId };