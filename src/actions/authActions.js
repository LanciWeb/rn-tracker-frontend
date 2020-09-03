import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';
import { AsyncStorage } from 'react-native';

const signUp = (dispatch) => async (email, password) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    const { token } = response.data;
    await AsyncStorage.setItem('token', token); // sets token in local storage
    dispatch({ type: 'signup', payload: token });
    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'something went wrong with sign up',
    });
  }
};

const signIn = (dispatch) => async (email, password) => {
  try {
    console.log('data', email, password);
    const response = await trackerApi.post('/signin', { email, password });
    const { token } = response.data;
    await AsyncStorage.setItem('token', token);
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'something went wrong with sign in',
    });
  }
};

const signOut = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('loginFlow');
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clearErrorMessage' });
};

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
  } else navigate('loginFlow');
};

export default { signUp, signIn, signOut, tryLocalSignIn, clearErrorMessage };
