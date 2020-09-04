export default (state, action) => {
  const { type, payload } = action;
  const prevState = Object.assign({}, state);
  switch (type) {
    default:
      return state;
  }
};
