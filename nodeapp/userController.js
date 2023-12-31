const User = require('./user');

exports.createUser = async (req, res) => {
    try {
        const { name, age, email } = req.body;
        const user = new User({ name, age, email });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
