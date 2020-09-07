import React from 'react';
import Spacer from './Spacer';
import { Input, Button } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = React.useContext(LocationContext);

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
