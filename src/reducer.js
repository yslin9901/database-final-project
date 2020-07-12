import { STORE_USER_NAME, STORE_ATMOSPHERE_TYPE, PLAYLIST_DURATION, 
  PLAYLIST_INFO, SONG_TEMPO, SONG_ENERGY, SONG_LIVENESS,
IMPORT_SONG_NAME, IMPORT_SONG_ARTIST, IMPORT_SONG_ATMOSPHERE } from './type';
const INITIAL_STATE = {
  user_name: '',
  atmosphere_type: '',
  playlist_duration: '',
  playlist_info: [],
  tempo: '',
  energy: '',
  liveness: '',
  import_song_name: '',
  import_song_artist: '',
  import_song_atmosphere: ''
};

const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_USER_NAME: {
      const { user_name } = action.payload;
      return {
        ...state,
        user_name: user_name,
      };
    }
    case STORE_ATMOSPHERE_TYPE: {
      const { type } = action.payload;
      return {
        ...state,
        atmosphere_type: type,
      }
    }
    case PLAYLIST_DURATION: {
      const {duration} = action.payload;
      return {
        ...state,
        playlist_duration: duration
      }
    }
    case PLAYLIST_INFO: {
      const {info} = action.payload;
      return {
        ...state,
        playlist_info: info
      }
    }
    case SONG_TEMPO: {
      const {tempo} = action.payload;
      return {
        ...state,
        tempo: tempo
      }
    }
    case SONG_ENERGY: {
      const {energy} = action.payload;
      return {
        ...state,
        energy: energy
      }
    }
    case SONG_LIVENESS: {
      const {liveness} = action.payload;
      return {
        ...state,
        liveness: liveness
      }
    }
    case IMPORT_SONG_NAME: {
      const {name} = action.payload;
      return {
        ...state,
        import_song_name: name      
      }
    }
    case IMPORT_SONG_ARTIST: {
      const {artist} = action.payload;
      return {
        ...state,
        import_song_artist: artist
      }
    }
    case IMPORT_SONG_ATMOSPHERE: {
      const {atmo} = action.payload;
      return {
        ...state,
        import_song_atmosphere: atmo
      }
    }
    default:
      return state;
  }
};
export default Reducer;
