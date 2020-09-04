const stopRecording = (dispatch) => () => {};
const startRecording = (dispatch) => () => {};
const addLocation = (dispatch) => (location) => {
  dispatch({ type: 'add_current_location', payload: location });
};

export default { addLocation, stopRecording, startRecording };
