import * as type from '../types';

export const setLoading = payload => ({
  type: type.UI_LOADING_PROGRESS, payload
});

export const openAlertServer = payload => ({
  type: type.APP_ALERT_SERVER, payload
});
