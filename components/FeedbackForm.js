import React, {useState} from 'react';
import {View,Text,TextInput,Button,TouchableOpacity} from 'react-native';
import {useValue} from './ValueStorageContext';
import {sendFeedback} from './Feedback';
const Async4 = () => {
    const {currentValue} = useValue();
    const [feedback,setFeedback] = useState("");
    return (
        <View>
            
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <TouchableOpacity
                    title="send feedback"
                    style={{fontSize:10}}
                    onPress = {() => {
                        console.log('sending feedback....');
                        sendFeedback(feedback);
                        setFeedback("")}}
                    >
                    <Text>send feedback</Text>
                </TouchableOpacity>
            </View>
            <TextInput 
               multiline
               numberOfLines={2}
               placeholder="feedback"
               style={{backgroundColor:'lightgreen'}}
               onChangeText = {(text) => setFeedback(text)}
               value={feedback}
            />

        </View>
    )
}

export default Async4;