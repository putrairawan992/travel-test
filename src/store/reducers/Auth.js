import { APP_AUTH_SET_USER } from '../types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function index(state = initialState, action) {
  switch (action.type) {
    case APP_AUTH_SET_USER:
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length !== 0,
        user: action.payload
      };
    default:
      return state;
  }
}
