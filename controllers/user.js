const db = require("../models");
const User = db.users;
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    const {email, password} = req.body;
    const checkUser = await User.findOne({where : {email}}).catch((err)=>{
        console.log("Error : ", err);
    });

    if(!checkUser) {
        return res.json({message : "Email or password incorrect!"});
    } else if (checkUser.password !== password) {
        return res.json({message : "Email or password incorrect!"});
    }

    const jwtToken = jwt.sign({id : checkUser.id, email : checkUser.email}, process.env.JWT_SECRET);
    res.json({
        message : "Login successfully",
        token : jwtToken
    });
}

exports.register = async (req, res) => {
    const {username, email, password} = req.body;
    const checkUser = await User.findOne({where : {email}}).catch((err)=>{
        console.log("Error : ", err);
    });

    if(checkUser) {
        res.json("User with email already exist!");
    }

    const user = await User.create(req.body).catch((err) => {
        console.log("Error : ", err);
        res.json({message:"Cannot register at the moment!"});
    });

    if(user) {
        res.json({message : "User successfully registered!"});
    }
}

