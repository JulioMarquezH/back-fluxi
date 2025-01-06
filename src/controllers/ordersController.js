const Orders = require('../models/Orders');

exports.getOrders = async (req, res) => {
    try {
        const user_id = req.query.user_id;

        if (!user_id) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        const filter = { user_id: user_id };
        const orders = await Orders.find(filter).limit(10);

        return res.status(200).json({ status: 200, message: 'success', data: orders });
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};

exports.updateOrders = async (req, res) => {
    try {
        const id = req.query.id;
        const ordersData = req.body;
    
        if (!id || !ordersData) {
            return res.status(400).json({ message: 'ID and update data are required' });
        }

        const order = await Orders.findById({ _id: id });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
    
        Object.keys(ordersData).forEach((key) => {
            order[key] = ordersData[key];
        });

        const updatedOrder = await order.save();

        return res.json(updatedOrder);
    } catch (error) {
    
        return res.status(500).json({
            message: 'Error updating order',
            error: error.message,
        });
    }
};

exports.createOrder = async (req, res) => {
    try {
        const orderData = req.body;

        if (!orderData || Object.keys(orderData).length === 0) {
            return res.status(400).json({ message: 'Order data is required' });
        }

        const newOrder = new Orders(orderData);

        const savedOrder = await newOrder.save();

        return res.status(201).json(savedOrder);
    } catch (error) {
        return res.status(500).json({
            message: 'Error creating order',
            error: error.message,
        });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const orderId = req.query.id;

        if (!orderId) {
            return res.status(400).json({ message: 'Order ID is required' });
        }

        const deletedOrder = await Orders.findByIdAndDelete(orderId);

        if (!deletedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        return res.status(200).json({ message: 'Order deleted successfully', deletedOrder });
    } catch (error) {
        return res.status(500).json({
            message: 'Error deleting order',
            error: error.message,
        });
    }
};

