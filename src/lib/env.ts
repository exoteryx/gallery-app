import {cleanEnv, str} from 'envalid';

const env = cleanEnv(process.env, {
    API: str(),
})

export default env;