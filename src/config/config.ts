import {config as conf} from 'dotenv';
conf();

const _config = {
    port:process.env.PORT || 3000,
    apiKey: process.env.API_KEY || '',
};

export const config = Object.freeze(_config);