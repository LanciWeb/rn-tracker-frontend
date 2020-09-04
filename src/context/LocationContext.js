import createDataContext from './createDataContext';
import locationActions from '../actions/locationActions';
import locationReducer from '../reducers/locationReducer';

const initialState = {
  name: '',
  locations: [],
  recording: false,
  currentLocation: null,
};
export const { Context, Provider } = createDataContext(
  locationReducer,
  locationActions,
  initialState
);
