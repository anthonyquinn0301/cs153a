import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import {useValue} from './ValueStorageContext';

const Async1 = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi,setBMI] = useState(0);
 const {currentValue,setCurrentValue} = useValue();
  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize:40,fontWeight:'bold'}}>
          BMI Calculator
      </Text>
      <TextInput
        style={{height: 40}}
        placeholder="Enter your height in inches"
        onChangeText={newText => 
             setHeight(newText)}
        defaultValue={height}
      />
<Button title ="Save Height" onPress = {() =>
         setCurrentValue({height:height})
}
/>
     <TextInput
        style={{weight: 40}}
        placeholder="Enter your weight in inches"
        onChangeText={newText => 
             setWeight(newText)}
        defaultValue={weight}
      />
<Button title ="Save Weight" onPress = {() =>
         setCurrentValue({weight:weight})
}
/>
      <View style={{flexDirection:'row'}}>
        <Button
            title="calculate BMI"
            onPress = {() => {
                setBMI(weight/(height*height)*703)
            }}
        />
      </View>
      <Text>
        height: {height} inches
      </Text>
      <Text>
        weight: {weight} pounds
      </Text>
      <Text>
        bmi: {bmi}
      </Text>
    </View>
  );
}

export default Async1;
