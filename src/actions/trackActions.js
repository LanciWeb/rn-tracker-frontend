import api from '../api/tracker';

const createTrack = (dispatch) => async (name, locations) => {
  await api.post('/tracks', { name, locations });
  console.log(name, locations.length);
};
const fetchTracks = (dispatch) => () => {};
export default { createTrack, fetchTracks };
