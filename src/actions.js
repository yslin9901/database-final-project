import { STORE_USER_NAME, STORE_ATMOSPHERE_TYPE, PLAYLIST_DURATION } from './type';

export const store_user_name = user_name => {
  return {
    type: STORE_USER_NAME,
    payload: { user_name },
  };
};

export const storeAtmosphereType = type => {
  return {
    type: STORE_ATMOSPHERE_TYPE,
    payload: { type },
  };
};

export const playlistDuration = duration => {
  return {
    type: PLAYLIST_DURATION,
    payload: { duration },
  };
};