import {
  Accuracy,
  watchPositionAsync,
  requestPermissionsAsync,
} from 'expo-location';
import { useState, useEffect } from 'react';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        const granted = await requestPermissionsAsync();
        if (!granted) {
          throw new Error('Permission Denied');
        }
        subscriber = await watchPositionAsync(
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
        setErr(e);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) subscriber.remove();
      subscriber = null;
    }
    return () => {
      if (subscriber) subscriber.remove();
    };
  }, [callback, shouldTrack]);

  return [err];
};
