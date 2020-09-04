import {
  Accuracy,
  watchPositionAsync,
  requestPermissionsAsync,
} from 'expo-location';
import { useState, useEffect } from 'react';

export default (callback) => {
  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      const granted = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('Permission Denied');
      }
      await watchPositionAsync(
        {
          timeInterval: 1000,
          distanceInterval: 10,
          accuracy: Accuracy.BestForNavigation,
        },
        (location) => {
          callback(location);
        }
      );
    } catch (e) {
      console.log('siamo qui');
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return [err];
};
