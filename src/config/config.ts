import {config as conf} from 'dotenv';
conf();

const _config = {
    port:process.env.PORT || 3000,
    apiKey: process.env.API_KEY || '', //Gemini API key
    mongoString: process.env.MONGO_STRING || '',
    nodeEnv: process.env.NODE_ENV || ''
};

export const config = Object.freeze(_config);
