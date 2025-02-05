import {config as conf} from 'dotenv';
conf();

const _config = {
    port:process.env.PORT || 3000,
    apiKey: process.env.API_KEY || 'AIzaSyC2oepjp7tbKgUGlCpV0aNP8ZAKcQ1c_4g', //Gemini API key
    mongoString: process.env.MONGO_STRING || 'mongodb://127.0.0.1:27017/',
    nodeEnv: process.env.NODE_ENV || 'development'
};

export const config = Object.freeze(_config);