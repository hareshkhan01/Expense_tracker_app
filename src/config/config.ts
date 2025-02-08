import {config as conf} from 'dotenv';
conf();

const _config = {
    port:process.env.PORT || 3000,
    apiKey: process.env.API_KEY || '',
    mongoString: process.env.MONGO_STRING || '',
    nodeEnv: process.env.NODE_ENV || '',
    jwtSecret : process.env.JWT_SECRET,
    frontendURL : process.env.FRONTEND_URL
};

export const config = Object.freeze(_config);