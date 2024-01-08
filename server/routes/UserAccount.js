const express = require('express')
const router = express.Router()
const {UserAccount} = require('../models')

router.get('/',async (req, res) => {
    const listOfUserAccount = await UserAccount.findAll();
    res.send(listOfUserAccount)
});

router.post('/',async (req, res) =>{
    const userAccount = req.body;
    await UserAccount.create(userAccount);
});

module.exports = router;