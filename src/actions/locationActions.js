const changeName = (dispatch = (name) => {
  dispatch({ type: 'change_name', payload: name });
});

const stopRecording = (dispatch) => () => {
  dispatch({ type: 'stop_recording' });
};
const startRecording = (dispatch) => () => {
  dispatch({ type: 'start_recording' });
};
const addLocation = (dispatch) => (location, recording) => {
  dispatch({ type: 'add_current_location', payload: location });
  if (recording) dispatch({ type: 'add_location', payload: location });
};

export default { changeName, addLocation, stopRecording, startRecording };
