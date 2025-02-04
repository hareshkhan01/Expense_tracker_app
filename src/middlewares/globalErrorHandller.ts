import { config } from "../config/config";
import  {Request, Response, NextFunction} from 'express';
import  { HttpError } from 'http-errors';








//global error handler
const globalErrorHandler = (err: HttpError, req:Request, res:Response, next:NextFunction) =>  {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode).json({
        message: err.message,
        errorStack:config.nodeEnv==="development" ? err.stack : '🤫'
    })
    next(err)
}
export default globalErrorHandler;