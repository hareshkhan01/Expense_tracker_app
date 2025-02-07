import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import { User } from "./userTypes";
import bcrypt from "bcrypt"
import {config} from "../config/config"
import {sign} from "jsonwebtoken"

const createUser = async (
    req:Request,
    res:Response,
    next:NextFunction) => {

        const {name, email, password } = req.body

        //validate all fields are filled
        if(!name || !email || !password){
            const error = createHttpError(400, 'All fields are required')
            next(error)
        }

        //check user already exists or not
        try {
            
            const user = await userModel.findOne({email})

        if(user){
            const error = createHttpError(400,"user already exist")
            next(error)
            }
        } catch (error) {
            return next(createHttpError(500,"error in getting new user"))
        }

        //create new user otherwise

        let newUser : User
        try {
        //password --> hash
        const  hashedPassword = await bcrypt.hash(password,10); // await coz hashinh is cpu intensive

            newUser = await userModel.create({
            name,
            email,
            password : hashedPassword,
            totalFood:0,
            totalTransport:0,
            totalUtilities:0,
            totalEntertainment:0,
            totalShopping:0,
            totalOthers:0
})
        } catch (error) {
            return next(createHttpError(500,"error while creating new user"));
        }


        //auth: token generation

        try {
            // helping in auth
        // token generation --> sub is the payload which is the user id and swcond param is the secret
        const token = sign({sub:newUser._id},
            config.jwtSecret as string,{
             expiresIn:"7d",
             algorithm:"HS256"
            }
        )
        
        //response
        res.status(201).json({token});
        
        } catch (error) {
            return next(createHttpError(500,"error while creating token"));
        }




}


const loginUser = async(
    req:Request,
    res:Response,
    next:NextFunction
) => {
    const {email,password} = req.body;
    if(!email || !password){
        const error = createHttpError(400, "All fields are required");
        return next(error); // passing err to global err handler  to client 
    }
//check user in db or not

let user 
try {
     user = await userModel.findOne({email});
    if(!user){
        const error = createHttpError(404, "User not found");
        return next(error); // passing err to global err handler  to client 
    }
} catch (error) {
    return next(createHttpError(500,"error while getting user"));   
}
  //password match or not
  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password,user.password);
    if(!isValidPassword){
        const error = createHttpError(401, "incorrect password");
        return next(error); // passing err to global err handler  to client
      }
  } catch (error) {
    return next(createHttpError(500,"error while comparing password"));   
  }


    //handle err? 
    try {
            //create access token
    // token generation --> sub is the payload which is the user id and swcond param is the secret
 
        const token = sign({sub:user._id},
            config.jwtSecret as string,{
            expiresIn:"7d",
            algorithm:"HS256"
            }
        )
        
            res.json({token});
    } catch (err) {
        return next(createHttpError(500,"error while creating token"));
    }



}












export {createUser,loginUser}