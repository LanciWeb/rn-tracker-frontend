import {
  Accuracy,
  watchPositionAsync,
  requestPermissionsAsync,
} from 'expo-location';
import { useState, useEffect } from 'react';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);
  const startWatching = async () => {
    try {
      const granted = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('Permission Denied');
      }
      const sub = await watchPositionAsync(
        {
          timeInterval: 1000,
          distanceInterval: 10,
          accuracy: Accuracy.BestForNavigation,
        },
        (location) => {
          callback(location);
        }
      );
      setSubscriber(sub);
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack]);

  return [err];
};
