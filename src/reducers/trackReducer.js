export default (state, action) => {
  const { type, payload } = action;
  const prevState = Object.assign([], state);
  switch (type) {
    case 'fetch_tracks':
      return payload;
    default:
      return prevState;
  }
};
