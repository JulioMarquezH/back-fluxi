const User = require('../models/Users');

exports.getUsers = async (req, res) => {
  try {
    const name = req.query.name;
    const filter = name ? { name: { $regex: name, $options: 'i' } } : {};
    const users = await User.find(filter).limit(10);

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = req.query.id;
    const userData = req.body;
    
    if (!id || !userData) {
      return res.status(400).json({ message: 'ID and update data are required' });
    }
    console.log(User.findByIdAndUpdate(id, userData, { new: true }))
    return

    const updatedUser = await User.findByIdAndUpdate(id, userData, { new: true });    

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
};

exports.postLogin = async (req, res) => {
  try {
    const userData = req.body;
    const filter = { email: userData.username, password: userData.password };
    const users = await User.find(filter).limit(1);

    if (users.length === 0) {
      return res.status(404).json({ status: 404, message: 'User not found', data: [] });
    }

    return res.status(200).json({ status: 200, message: 'success', data: users });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
};

