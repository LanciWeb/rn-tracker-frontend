import React from 'react';
import Spacer from './Spacer';
import { Input, Button } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
const TrackForm = () => {
  const {
    changeName,
    stopRecording,
    startRecording,
    state: { name, recording, locations },
  } = React.useContext(LocationContext);

  console.log(locations.length);

  return (
    <>
      <Spacer>
        <Input
          value={name}
          placeholder="Enter name"
          onChangeText={changeName}
        />
      </Spacer>
      <Button
        title={recording ? 'STOP' : 'START'}
        onPress={() => {
          recording ? stopRecording() : startRecording();
        }}
      />
    </>
  );
};

export default TrackForm;
