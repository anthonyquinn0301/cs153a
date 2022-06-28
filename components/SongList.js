import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import {useValue} from './ValueStorageContext';

const SongList = () => {
  const {currentValue,setCurrentValue} = useValue();
  const [song, setSong] = useState("");
  

  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>
         Song List:
      </Text>
      <Text>
        Enter a song name in the box below to add a song to the list.
      </Text>
       <Text> {JSON.stringify(currentValue.log)}</Text> 
      
      <TextInput
        placeholder="Enter song name"
        onChangeText={newText => 
             setSong(newText)}
        defaultValue ={song}
      
      />
               
                <Button
                title='add'
                color = '#FAD4D4'
                onPress = {() => {
                    setCurrentValue({ 
                        log:(currentValue.log || []).concat([song])})
                    }}
            />              
              
       
       
    </View>
    
  );
}


export default SongList;