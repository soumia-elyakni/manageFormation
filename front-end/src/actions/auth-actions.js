export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export function loginSuccess(data) {
    return {
      type: LOGIN_SUCCESS,
      payload: { user: data },
    };
  }
  
  export function loginFailed(error) {
    return {
      type: LOGIN_FAILED,
      payload: { error },
    };
  }



