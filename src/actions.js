import {STORE_USER_NAME} from './type';

export const store_user_name = user_name => {
  return {
    type: STORE_USER_NAME,
    payload: {user_name},
  };
};