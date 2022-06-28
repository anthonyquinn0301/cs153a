import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import {useValue} from './ValueStorageContext';
const Async3 = () => {
  const {currentValue,setCurrentValue} = useValue();
  return (
    <View style={{padding: 10, flexDirection:'column'}}>
      <Text>
          {JSON.stringify(currentValue.log)}
      </Text>
     <View style = {{flexDirection:'row',justifyContent:'space-evenly'}}>
        <Text>
          name
         </Text>
      <Text style = {{backgroundColor:'green'}}>
{currentValue.name}
</Text>

</View>

<View style = {{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
<Text>age</Text>
<Text style = {{backgroundColor:'blue'}}> {currentValue.age}</Text>
</View>
   <View style = {{flex:1, flexDirection:'row',justifyContent:'space-evenly'}}>
      <Text> weight </Text>
      <Text style = {{backgroundColor:'red'}}>
        {currentValue.weight}
</Text>
   </View>
<View style = {{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
  <Text>
height
</Text>
<Text style ={{backgroundColor:'#ADD8E6'}}>
{currentValue.height}
</Text>
</View>
            <Button 
               title="save profile"
               color="blue"
            
               />

    </View>
  );
}

export default Async3;