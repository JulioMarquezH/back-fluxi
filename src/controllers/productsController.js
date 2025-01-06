const Products = require('../models/Products');

exports.getProducts = async (req, res) => {
    try {
        const id = req.query.id;
        const user_id = req.query.user_id;

        if (!user_id && !id) {
            return res.status(400).json({ message: 'User ID is required' });
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

exports.putProductById = async (req, res) => {
    try {
        const id = req.query.id;
        const data = req.body;
        const product = await Products.findById(id);

        if (!product) {
            return res.status(404).json({ status: 404, message: 'Product not found', data: {} });
        }

        product.name = data.name;
        console.log('Producto antes de guardar:', product);
        console.log('el nombre:', product.name);

        console.log(await product.save());

        return res.status(200).json({ status: 200, message: 'Success', data: product });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error: error.message });
    }
};

