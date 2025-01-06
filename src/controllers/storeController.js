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

exports.updateStore = async (req, res) => {
    try {
        const id = req.query.id;
        const storeData = req.body;

        if (!id || !storeData) {
            return res.status(404).json({ status: 404, message: 'ID and update data are required', data: [] });
        }

        const store = await Store.findById({ _id: id });
        if (!store) {
            return res.status(404).json({ status: 404, message: 'Store not found', data: [] });
        }

        Object.keys(storeData).forEach((key) => {
            store[key] = storeData[key];
        });

        const updatedStore = await store.save();

        return res.status(200).json({ status: 200, message: 'success', data: updatedStore });
    } catch (error) {

        return res.status(500).json({
            message: 'Error updating order',
            error: error.message,
        });
    }
};

exports.createStore = async (req, res) => {
    try {
        const storeData = req.body;

        if (!storeData || Object.keys(storeData).length === 0) {
            return res.status(404).json({ status: 404, message: 'ID and update data are required', data: [] });
        }

        const newStoreData = new Store(storeData);
        const savedStore = await newStoreData.save();
        return res.status(200).json({ status: 200, message: 'success', data: savedStore });
    } catch (error) {
        return res.status(500).json({
            message: 'Error creating order',
            error: error.message,
        });
    }
};

exports.deleteStore = async (req, res) => {
    try {
        const storeId = req.query.id;

        if (!storeId) {
            return res.status(404).json({ status: 404, message: 'Store ID is required', data: [] });
        }

        const deletedStore = await Store.findByIdAndDelete(storeId);

        if (!deletedStore) {
            return res.status(404).json({ status: 404, message: 'Store not found', data: [] });
        }

        return res.status(200).json({
            status: 200,
            message: 'success',
            data: deletedStore,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Error deleting store',
            error: error.message,
        });
    }
};

