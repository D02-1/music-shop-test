const express = require('express');
const router = express.Router();

const { getOrders, getOrdersId, postOrders, editOrdersId, deleteOrdersId } = require('../controllers/ordersController.js')

router.route("/")
.get(getOrders)
.post(postOrders)

router.route("/:id")
.get(getOrdersId)

.put(editOrdersId)
.delete(deleteOrdersId) 

module.exports = router;