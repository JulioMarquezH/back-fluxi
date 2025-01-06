const Store = require("../models/Store");

exports.getStore = async (req, res) => {
    try {
        const user_id = req.query.user_id;
        
        if (!user_id) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        const filter = { user_id: user_id };
        const store = await Store.find(filter).limit(10);
        
        if (store.length === 0) {
            return res.status(404).json({ status: 404, message: 'Store not found', data: [] });
        }

        return res.status(200).json({ status: 200, message: 'success', data: store });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};