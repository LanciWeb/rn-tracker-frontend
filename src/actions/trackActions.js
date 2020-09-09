import api from '../api/tracker';

const createTrack = (dispatch) => async (name, locations) => {
  await api.post('/tracks', { name, locations });
  console.log(name, locations.length);
};
const fetchTracks = (dispatch) => async () => {
  const response = await api.get('/tracks');
  const tracks = response.data;
  dispatch({ type: 'fetch_tracks', payload: tracks });
};
export default { createTrack, fetchTracks };
