import { ENV } from "./features/user/services/env_constants";

const select_env = ENV.QA; // ENV.DEV, ENV.QA, ENV.PROD, ENV.LOCAL or ENV.NODE_LIVE

const INITIAL_STATE = {
  AUTH_BASE_URL: '',
  BASE_URL: '',
};

switch (select_env) {
  case ENV.DEV:
    Object.assign(INITIAL_STATE, {
      AUTH_BASE_URL: 'https://api.tenetic.app/kcl',
      BASE_URL: 'https://api.tenetic.app/kcl',
    });
    break;

  case ENV.QA:
    Object.assign(INITIAL_STATE, {
      AUTH_BASE_URL: 'https://api.tenetic.app/kcl',
      BASE_URL: 'https://api.tenetic.app/kcl',
    });
    break;
  case ENV.PROD:
    Object.assign(INITIAL_STATE, {
      AUTH_BASE_URL: '',
      BASE_URL: '',
    });
    break;
  case ENV.LOCAL:
    Object.assign(INITIAL_STATE, {
      AUTH_BASE_URL: 'http://192.168.8.100:3000',
      BASE_URL: 'http://192.168.8.100:3000',
    });
    break;
  case ENV.NODE_LIVE:
    Object.assign(INITIAL_STATE, {
      AUTH_BASE_URL: '',
      BASE_URL: '',
    });
    break;

  default:
    Object.assign(INITIAL_STATE, INITIAL_STATE);
    break;
}

console.warn('ENV : ', select_env, 'URL', INITIAL_STATE);


export const AUTH_BASE_URL = INITIAL_STATE.AUTH_BASE_URL;
export const BASE_URL = INITIAL_STATE.BASE_URL;
