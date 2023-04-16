import { CONFIG } from './../config';
export const konsole = {
    log: (...args) => CONFIG.isDevEnv && console.log(...args),
    error: (...args) => CONFIG.isDevEnv && console.error(...args),
}
