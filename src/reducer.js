import {STORE_USER_NAME} from './type';
const INITIAL_STATE = {
  user_name: '',
};

const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_USER_NAME: {
      const {user_name} = action.payload;
      return {
        ...state,
        user_name: user_name,
      };
    }
    default:
      return state;
  }
};
export default Reducer;
