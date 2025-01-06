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
        const OrdersData = req.body;
        const _id = id
        console.log(OrdersData)


        if (!id || !OrdersData) {
            return res.status(400).json({ message: 'ID and update data are required' });
        }

        // const filter = { _id: id };
        // const updatedOrders = await Orders.find(filter).limit(1);

        // Orders.updateOne({_id}, OrdersData);

        // updatedOrders.product_name = OrdersData.product_name;
        // await updatedOrders.save();

        // const filter = { _id: id };
        // const orders = await Orders.find(filter).limit(10);
        // console.log(orders)
        // return
        const updatedOrders = await Orders.findByIdAndUpdate({ _id }, { ...OrdersData }, { upsert: true, new: true });
        // const updatedOrders = await Orders.findOneAndUpdate({ _id }, OrdersData);

        // const updatedOrders = await Orders.findOneAndUpdate({ _id }, OrdersData, { upsert: true, new: true });




        return res.json(updatedOrders);
    } catch (error) {
        return res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};