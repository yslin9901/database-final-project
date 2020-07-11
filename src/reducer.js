import { STORE_USER_NAME, STORE_ATMOSPHERE_TYPE, PLAYLIST_DURATION } from './type';
const INITIAL_STATE = {
  user_name: '',
  atmosphere_type: '',
  playlist_duration: '',
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
    default:
      return state;
  }
};
export default Reducer;
