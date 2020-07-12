import { STORE_USER_NAME, STORE_ATMOSPHERE_TYPE, PLAYLIST_DURATION, PLAYLIST_INFO,
SONG_TEMPO, SONG_ENERGY, SONG_LIVENESS,
IMPORT_SONG_NAME, IMPORT_SONG_ARTIST, IMPORT_SONG_ATMOSPHERE, IMPORT_SONG_DURATION } from './type';

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

export const importSongName = name => {
  return {
    type: IMPORT_SONG_NAME,
    payload: { name },
  };
};

export const importSongArtist = artist => {
  return {
    type: IMPORT_SONG_ARTIST,
    payload: { artist },
  };
};

export const importSongAtmosphere = atmo => {
  return {
    type: IMPORT_SONG_ATMOSPHERE,
    payload: { atmo },
  };
};

export const importSongDuration = duration => {
  return {
    type: IMPORT_SONG_DURATION,
    payload: { duration },
  };
};