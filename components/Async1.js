import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {useValue} from './ValueContext';

const Async1 = () => {
    const {currentValue,setCurrentValue} = useValue();
    return (
        <View>
            <Text> Async1 </Text>
            <Text> username: {currentValue.username} </Text>
        </View>
    )
}

export default Async1;