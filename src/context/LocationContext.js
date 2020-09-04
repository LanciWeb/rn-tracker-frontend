import createDataContext from './createDataContext';
import locationActions from '../actions/locationActions';
import locationReducer from '../reducers/locationReducer';

const initialState = { currentLocation: null, locations: [], recording: false };
export const { Context, Provider } = createDataContext(
  locationReducer,
  locationActions,
  initialState
);
