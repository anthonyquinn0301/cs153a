import React, { useState } from 'react';
import { Button, Text, TextInput, View,ScrollView,SafeAreaView, TouchableOpacity, Image, } from 'react-native';
import {useValue} from './ValueStorageContext';

const SongList = () => {
  const {currentValue,setCurrentValue} = useValue();
  const [song, setSong] = useState("");
  

  return (
    <ScrollView>
    <SafeAreaView>
    <View style={{padding: 10, justifyContent:'flex-start',flex:1}}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>
         Album List:
      </Text>
      <Text>
        Enter an album name in the box below to add favorite albums to the list.
      </Text>
       <Text>Album List: {JSON.stringify(currentValue.log)}</Text> 
      
      <TextInput
        placeholder="Enter album name"
        onChangeText={newText => 
             setSong(newText)}
        defaultValue ={song}
      
      />
               
                <TouchableOpacity
                title='add'
                color = '#FAD4D4'
                onPress = {() => {
                    setCurrentValue({ 
                        log:(currentValue.log || []).concat([song])})
                    }}
            > 
                                   <Image
       style ={{
        borderColor:'pink',
        borderWidth: 10,
        height: 75,
        width:75,
       }}
       source = {{
        uri: 'https://www.clipartmax.com/png/middle/2-28449_large-add-symbol-clipart-plus-sign-transparent-background.png'
      }}
      />
      <Text> Click to add to list </Text>
            </TouchableOpacity>              
              
       
       
    </View>
    </SafeAreaView>
    </ScrollView>
  );
}


export default SongList;