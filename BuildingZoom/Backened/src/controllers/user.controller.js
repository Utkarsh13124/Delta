import { User } from "../models/user.model";
import bcrypt, { hash } from "bcrypt";
import httpStatus from "http-status";


const register = async (req, res) => {
    const { name, username, password } = req.body;


    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(httpStatus.FOUND).json({ message: "User already exist" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name: name,
            username: username,
            password: hashedPassword
        });

        await newUser.save();

        res.status(httpStatus.CREATED).json({ message : "User Registered"});
    } catch (e) {
        res.json({ message: `Something went wrong : ${e}` });
    }
};