const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

router.post('/foodData',async (req,res)=>{
    try {
        // Fetch data from MongoDB collection
        const foodItems = await mongoose.connection.db.collection('food_items').find({}).toArray();
        const foodCategory = await mongoose.connection.db.collection('foodCategory').find({}).toArray();
        res.send([foodItems,foodCategory]);
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;