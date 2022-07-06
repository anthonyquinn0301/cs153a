import React, {useState} from 'react';
import {View,Text,TextInput,Button,TouchableOpacity,SafeAreaView,ScrollView,Image} from 'react-native';
import {useValue} from './ValueStorageContext';
import {sendFeedback} from './Feedback';
const Async4 = () => {
    const {currentValue} = useValue();
    const [feedback,setFeedback] = useState("");
    return (
        <ScrollView>
        <SafeAreaView>
        <View>
            
            <View style={{marginTop:35,flexDirection:'row',justifyContent:'center'}}>
                <TouchableOpacity
                    title="send feedback"
                    style={{fontSize:10}}
                    onPress = {() => {
                        console.log('sending feedback....');
                        sendFeedback(feedback);
                        setFeedback("")}}
                    >
                                               <Image
       style ={{
        borderColor:'green',
        borderWidth: 10,
        height: 150,
        width:250,
       }}
       source = {{
        uri: 'https://larryferlazzo.edublogs.org/files/2020/03/feedback_1583238216.png'
      }}
      />
     
                    <Text>click button to send feedback</Text>
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
        </SafeAreaView>
        </ScrollView>
    )
}

export default Async4;