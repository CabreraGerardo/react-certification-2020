import { storage } from '../utils/storage';

const AUTH_STORAGE_KEY = 'login_state';

export default function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_THEME': {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case 'CHANGE_SEARCH': {
      return {
        ...state,
        search: action.payload,
      };
    }
    case 'LOG_IN': {
      storage.set(AUTH_STORAGE_KEY, true);
      return {
        ...state,
        authenticated: true,
      };
    }
    case 'LOG_OUT': {
      storage.set(AUTH_STORAGE_KEY, false);
      return {
        ...state,
        authenticated: false,
      };
    }
    default:
      throw new Error('Undefined Action');
  }
}
