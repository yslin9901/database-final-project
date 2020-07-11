import { STORE_USER_NAME, STORE_ATMOSPHERE_TYPE } from './type';
const INITIAL_STATE = {
  user_name: '',
  atmosphere_type: '',
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
    default:
      return state;
  }
};
export default Reducer;
