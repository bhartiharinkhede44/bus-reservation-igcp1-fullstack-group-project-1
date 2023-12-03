import mongoose from "mongoose";
import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import User from "./src/Model/User.js";


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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})