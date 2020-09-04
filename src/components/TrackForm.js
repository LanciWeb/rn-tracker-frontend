import React from 'react';
import Spacer from './Spacer';
import { Input, Button } from 'react-native-elements';

const TrackForm = () => {
  return (
    <>
      <Spacer>
        <Input placeholder="Enter name" />
      </Spacer>
      <Button title="Start Recording" />
    </>
  );
};

export default TrackForm;
