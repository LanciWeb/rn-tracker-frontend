export default (state, action) => {
  const prevState = Object.assign({}, state);
  const { type, payload } = action;

  switch (type) {
    case 'add_error':
      return { ...prevState, errorMessage: payload };
    case 'signup':
    case 'signin':
      return { errorMessage: '', token: payload };
    case 'clearErrorMessage':
      return { ...prevState };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};
