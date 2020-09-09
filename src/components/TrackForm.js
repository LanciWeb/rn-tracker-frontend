import React from 'react';
import Spacer from './Spacer';
import useSaveTracks from '../hooks/useSaveTracks';
import { Input, Button } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
const TrackForm = () => {
  const [saveTrack] = useSaveTracks();
  const {
    changeName,
    stopRecording,
    startRecording,
    state: { name, recording, locations },
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
      <Spacer>
        <Button
          title={recording ? 'STOP' : 'START'}
          onPress={() => {
            recording ? stopRecording() : startRecording();
          }}
        />
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="SAVE" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
