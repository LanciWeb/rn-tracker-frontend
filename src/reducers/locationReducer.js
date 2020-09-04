export default (state, action) => {
  const { type, payload } = action;
  const prevState = Object.assign({}, state);
  switch (type) {
    case 'stop_recording':
      return { ...prevState, recording: false };
    case 'start_recording':
      return { ...prevState, recording: true };
    case 'add_current_location':
      return { ...prevState, currentLocation: payload };
    default:
      return state;
  }
};
