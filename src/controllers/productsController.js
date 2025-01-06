const Products = require('../models/Products');

exports.getProducts = async (req, res) => {
    try {
        const id = req.query.id;
        const user_id = req.query.user_id;

        if (!user_id && !id) {
            return res.status(404).json({ status: 404, message: 'User ID is required', data: [] });
        }

        const filter = id ? { _id: id } : { user_id: user_id };
        const products = await Products.find(filter).limit(10);

        if (products.length === 0) {
            return res.status(404).json({ status: 404, message: 'Product not found', data: [] });
        }

        return res.status(200).json({ status: 200, message: 'success', data: products });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};


exports.updateProduct = async (req, res) => {
    try {
        const id = req.query.id;
        const productsData = req.body;

        if (!id || !productsData) {
            return res.status(404).json({ status: 404, message: 'User ID is required', data: [] });
        }

        const product = await Products.findById({ _id: id });
        if (!product) {
            return res.status(404).json({ status: 404, message: 'Product not found', data: [] });
        }

        Object.keys(productsData).forEach((key) => {
            product[key] = productsData[key];
        });

        const updatedProduct = await product.save();

        return res.status(200).json({ status: 200, message: 'success', data: updatedProduct });
    } catch (error) {

        return res.status(500).json({
            message: 'Error updating order',
            error: error.message,
        });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const productData = req.body;

        if (!productData || Object.keys(productData).length === 0) {
            return res.status(404).json({ status: 404, message: 'Product Data is required', data: [] });
        }

        const newProductData = new Products(productData);

        const savedProduct = await newProductData.save();

        return res.status(200).json({ status: 200, message: 'success', data: savedProduct });
    } catch (error) {
        return res.status(500).json({
            message: 'Error creating order',
            error: error.message,
        });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.query.id;

        if (!productId) {
            return res.status(404).json({ status: 404, message: 'Product ID is required', data: [] });
        }

        const deletedProduct = await Products.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ status: 404, message: 'Product not found', data: [] });
        }

        return res.status(200).json({
            status: 200,
            message: 'Product deleted successfully',
            data: deletedProduct,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Error deleting product',
            error: error.message,
        });
    }
};
