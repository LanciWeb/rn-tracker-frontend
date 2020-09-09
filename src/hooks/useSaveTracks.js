import { useContext } from 'react';
import { navigate } from '../navigationRef';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';

export default () => {
  const {
    state: { locations, name },
  } = useContext(LocationContext);
  const { createTrack } = useContext(TrackContext);
  const { resetLocation } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    resetLocation();
    navigate('TrackList');
  };
  return [saveTrack];
};
