import * as type from '../types';

const initialState = {
  isLoading: false,
  showAlertServer: false,
};

export default function index(state = initialState, action = null) {
  switch (action.type) {
    case type.UI_LOADING_PROGRESS:
      return {
        ...state,
        isLoading: action.payload,
      };
    case type.APP_ALERT_SERVER:
      return {
        ...state,
        showAlertServer: action.payload,
      };
    default:
      return state;
  }
}
