export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT'


const loginSuccess = (data) => {
    return {
      type: LOGIN_SUCCESS,
      payload: { user: data },
    };
  }
  
  const loginFailed = (error) => {
    return {
      type: LOGIN_FAILED,
      payload: { error },
    };
  }

  const logoutAction = () => {
    return {
      type : LOGOUT,
    }
  }

  export  {
    loginSuccess,
    loginFailed,
    logoutAction
  }

