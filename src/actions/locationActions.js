const stopRecording = (dispatch) => () => {
  dispatch({ type: 'stop_recording' });
};
const startRecording = (dispatch) => () => {
  dispatch({ type: 'start_recording' });
};
const addLocation = (dispatch) => (location) => {
  dispatch({ type: 'add_current_location', payload: location });
};

export default { addLocation, stopRecording, startRecording };
