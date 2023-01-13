
import { LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/auth-actions';

const initialState = {
  isLogged: false,
  user: null,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLogged: true,
        error : null
      };
      case LOGIN_FAILED:
        return {
          ...state,
          isLogged: false,
          user: null,
          error: action.payload.error,
        };

    default:
      return state;
  }
}
