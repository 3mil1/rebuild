/* global sessionStorage */
export const STEPPER_FORM_DATA_KEY = "stepper-form-data";

export default () => {
  sessionStorage.removeItem(STEPPER_FORM_DATA_KEY);
};
