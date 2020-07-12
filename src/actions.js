import { STORE_USER_NAME, STORE_ATMOSPHERE_TYPE, PLAYLIST_DURATION, PLAYLIST_INFO,
SONG_TEMPO, SONG_ENERGY, SONG_LIVENESS } from './type';

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

export const playlistInfo = info => {
  return {
    type: PLAYLIST_INFO,
    payload: { info },
  };
};

export const songTempo = tempo => {
  return {
    type: SONG_TEMPO,
    payload: { tempo },
  };
};

export const songEnergy = energy => {
  return {
    type: SONG_ENERGY,
    payload: { energy },
  };
};

export const songLiveness = liveness => {
  return {
    type: SONG_LIVENESS,
    payload: { liveness },
  };
};