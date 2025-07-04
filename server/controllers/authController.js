import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail } from "../mailtrap/emails.js";

//SignUp
export const signup =  async (req, res)=>{
    const {name, email, password} = req.body;
    try{
        if(!name || !email || !password){
            throw new Error("All Fields are Required!");
        }

        const userAlreadyExists = await User.findOne({email});
        if(userAlreadyExists){
            return res.status(400).json({success: false, message: "User Already Exists!"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const verificationToken = generateVerificationToken();

        const user = new User({
            name,
            email,
            password: hashedPassword,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // valid for 24 hours
        });

        await user.save();

        //Json Web Token
        generateTokenAndSetCookie(res, user._id);

        await sendVerificationEmail(user.email, verificationToken);

        res.status(201).json({
            success: true,
            message: "User Created Successfully!",
            user: {
                ...user._doc,
                password: undefined,
            }
        });

    }catch(error){
        res.status(400).json({success: false, message: error.message});
    }
}

//SignIn
export const signin =  async (req, res)=>{
    res.send("Signin route");
}

//SignOut
export const signout =  async (req, res)=>{
    res.send("Signout route");
}