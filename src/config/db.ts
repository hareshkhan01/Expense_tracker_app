import mongoose, { mongo } from "mongoose";
import { config } from "./config"



const connectDB = async () => { 

    try {
         mongoose.connection.on('connected', () => {
            console.log('Connected to MongoDB')
        })

        mongoose.connection.on('error', (error) => {
            console.log('Error connecting to MongoDB:', error)
        })
        //regisetr first
        await mongoose.connect(config.mongoString as string)

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB;