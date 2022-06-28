import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import {useValue} from './ValueStorageContext';

const Async2 = () => {
  const [ageYears, setAgeYears] = useState("");
 const {currentValue,setCurrentValue} = useValue();
  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize:40,fontWeight:'bold'}}>
          Age Calculator
      </Text>
      <TextInput
        style={{height: 40}}
        placeholder="Enter your age in years"
        onChangeText={newText => 
             setAgeYears(newText)}
        defaultValue={ageYears}
      />
<View style={{flexDirection:'row'}}>
     <Button title ="Save Age in Years" onPress = {() =>
         setCurrentValue({age:ageYears})
}
/>
    

    </View>
      <Text>
        age in years: {ageYears}
      </Text>
      <Text>
        age in weeks: {ageYears * 52}

      </Text>
      <Text>
        age in days: {ageYears*365}
      </Text>
</View>

  );
}

export default Async2;
