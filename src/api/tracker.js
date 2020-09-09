import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({ baseURL: 'http://74cd95fb142f.ngrok.io' });

//this takes care of sending the token along any request
const onFulfilled = async (axiosRequestConfig) => {
  const token = await AsyncStorage.getItem('token');
  if (token) axiosRequestConfig.headers.Authorization = `Bearer ${token}`;
  return axiosRequestConfig;
};

const onRejected = (err) => Promise.reject(err);

//sets a funcion to be triggered before any request is performed
instance.interceptors.request.use(onFulfilled, onRejected);

export default instance;
