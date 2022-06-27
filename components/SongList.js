import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';


const SongList = () => {
  const [song, setSong] = useState("");
  


  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>
         Song List:
      </Text>
      <Text>
        Enter a song name in the box below to add a song to the list.
      </Text>
      <TextInput
        placeholder="Enter song name"
        onChangeText={newText => 
             setSong(newText)}
        defaultValue={song}
      />

      <Text>
        {song} 
      </Text>
    </View>
  );
}

export default SongList;