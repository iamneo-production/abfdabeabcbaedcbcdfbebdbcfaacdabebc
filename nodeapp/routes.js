const express = require('express');
const router = express.Router();
const User = require('./user');

router.post('/users', async (req, res) => {
    try {
        const { name, age, email } = req.body;
        const newUser = await User.create({ name, age, email });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.getAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
