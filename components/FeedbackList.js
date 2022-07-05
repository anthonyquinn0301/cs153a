import React, {useState,useEffect} from 'react';
import {ScrollView,View,Text,TextInput,Button,FlatList} from 'react-native';
import {useValue} from './ValueStorageContext';
import {getFeedback,clearData} from './Feedback';
const Async5 = () => {
    const {currentValue} = useValue();
    const [feedback,setFeedback] = useState("");
    const [cleared,setCleared] = useState(false);
    const saveFeedback = (result) => {
        console.log("here is the result in saveFeedback:");
        console.dir(result);
        setFeedback(result);
    }

    useEffect(()=>{getFeedback(saveFeedback)},
            []);

    
    return (
        <View style={{flex:1}}>
            <Text> Here is the feedback </Text>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <Button
                title="get feedback"
                onPress = {() =>
                    getFeedback(saveFeedback)} 
                />
                <Button
                    title="clear"
                    onPress = {() => 
                            {clearData();
                            getFeedback(saveFeedback)
                            }
                        }
                />
            </View>

            <FlatList
                data={feedback}
                keyExtractor={({ id }, index) => index}
                renderItem={({ item }) => (
                         <Text>
                            {item.value}
                        </Text>
          )}
            />
            
           

            

        </View> 
    )
}

export default Async5;