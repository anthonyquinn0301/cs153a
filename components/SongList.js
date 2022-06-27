import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import {useValue} from './ValueStorageContext';

const SongList = () => {
  const [song, setSong] = useState("");
  const {currentValue,setCurrentValue} = useValue();

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
      
      />
               
               <Button 
               title="save song"
               onPress = {() => 
                setCurrentValue({song:song})
              }
               />         
       
       
    </View>
    
  );
}


export default SongList;