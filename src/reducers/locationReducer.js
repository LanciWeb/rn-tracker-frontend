export default (state, action) => {
  const { type, payload } = action;
  const prevState = Object.assign({}, state);
  switch (type) {
    case 'add_current_location':
      return { ...prevState, currentLocation: payload };
    default:
      return state;
  }
};
