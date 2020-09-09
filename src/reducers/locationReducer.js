export default (state, action) => {
  const { type, payload } = action;
  const prevState = Object.assign({}, state);
  switch (type) {
    case 'reset':
      return { ...prevState, name: '', locations: [] };
    case 'change_name':
      return { ...prevState, name: payload };
    case 'stop_recording':
      return { ...prevState, recording: false };
    case 'start_recording':
      return { ...prevState, recording: true };
    case 'add_location':
      return { ...prevState, locations: [...prevState.locations, payload] };
    case 'add_current_location':
      return { ...prevState, currentLocation: payload };
    default:
      return state;
  }
};
