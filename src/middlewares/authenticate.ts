import { config } from "../config/config";
import { NextFunction, Request, Response } from "express"
import createHttpError from "http-errors";
import {verify} from "jsonwebtoken"

export interface AuthRequest extends Request{
    userId:string;
} 

const authenticate = async(req : Request,res : Response,next : NextFunction) => {
    
    const token = req.header("Authorization");
    if(!token){
        return next(createHttpError(401,"auth token required"))
    }
    const parsedToken = token.split(" ")[1];

    try {
        const isVerified = verify(parsedToken,config.jwtSecret as string)
         console.log(isVerified);
        const _req = req as AuthRequest; 
        _req.userId = isVerified.sub as string;
        next()
    
    } catch (error) {
        return next(createHttpError(401,"token expired"))
    }
  

}

export default authenticate;
