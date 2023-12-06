import mongoose from "mongoose";
import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import User from "./src/Model/User.js";
import { PostApiV1Blogs , GetApiV1Blogs } from "./src/controlers/Blog.js";


const app = express();
app.use(express.json());

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGODB_URL);

    if (connection) {
        console.log('MongoDB Connected....💖')
    }
}
connectDB();

app.post('/signup', async (req, res) => {
    const { name, email, password, mobile, address, gender } = req.body

    const user = new User({
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        address: address,
        gender: gender
    })

    try {
        const saveduser = await user.save();

        res.json({
            success: true,
            data: saveduser,
            message: "fetch studendt"
        })
    }

    catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.json({
            success: false,
            message: "Email and Password is required"
        })
    }

    const user = await User.findOne({
        email: email,
        password: password
    }).select(" name email mobile")

    if (user) {
        res.json({
            success: true,
            data: user,
            message: "Login Successfully"
        })
    } else {
        res.json({
            success: false,
            message: "Invalid Credentials"
        })
    }
})

app.post("/api/v1/blogs" , PostApiV1Blogs)
app.get("/api/v1/blogs" , GetApiV1Blogs)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})