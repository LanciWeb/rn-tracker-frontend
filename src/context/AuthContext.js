import authActions from '../actions/authActions';
import createDataContext from './createDataContext';
import authReducer from '../reducers/authReducer';

export const { Provider, Context } = createDataContext(
  authReducer,
  authActions,
  { token: null, errorMessage: '' }
);
