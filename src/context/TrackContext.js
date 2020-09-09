import trackActions from '../actions/trackActions';
import trackReducer from '../reducers/trackReducer';
import createDataContext from './createDataContext';

const initialState = [];

export const { Context, Provider } = createDataContext(
  trackReducer,
  trackActions,
  initialState
);
