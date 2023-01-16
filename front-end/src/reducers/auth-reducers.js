
import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from '../actions/auth-actions';

let user = JSON.parse(localStorage.getItem('user'))

const initialState = user
  ? {isLogged: true, user: user}
  : {isLogged: false, user: null}

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
        case LOGOUT:
          return {
            ...state,
            isLogged: false,
            user: null,
          };

    default:
      return state;
  }
}
