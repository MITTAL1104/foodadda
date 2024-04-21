const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "ThisIsMyFirstMernProjectFoodOrderingApp$#";

router.post("/createuser",
    [
        body('email').not().isEmpty(),
        body('password','Incorrect password entered').isLength({ min: 5, max:50 })
    ],
    async (req, res) => {

        const errors = validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(400).json({errors: errors.array()});
        }

        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password,salt);

        try {
            await User.create({
                name: req.body.name,
                password: secPassword,
                email: req.body.email,
                location: req.body.location
            })
            res.json({ success: true });
        }
        catch (err) {
            console.log(err);
            res.json({ success: false });
        }
    })

router.post("/loginuser",async (req,res)=>{
    let email = req.body.email;
    try{
        let userData = await User.findOne({email});

        if(!userData){
            return res.status(400).json({errors: "Try logging in with correct credentials"});
        }

        const pwdCompare = await bcrypt.compare(req.body.password,userData.password);
        if(!pwdCompare)
        {
            return res.status(400).json({errors: "Incorrect Password"});
        }
        const data = {
            user:{
                id: userData.id
            }
        }

        const authToken = jwt.sign(data,jwtSecret);
        return res.json({ success: true, authToken:authToken });
    }
    catch(err)
    {
        console.error(`Error in login user ${err}`);
    }
})
module.exports = router;