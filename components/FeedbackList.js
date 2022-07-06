import React, {useState,useEffect} from 'react';
import {ScrollView,View,Text,TextInput,Button,FlatList,SafeAreaView, TouchableOpacity,Image} from 'react-native';
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
        <SafeAreaView>
        <View style={{marginTop:35}}>
            <Text> Here is the feedback </Text>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <TouchableOpacity
                title="get feedback"
                onPress = {() =>
                    getFeedback(saveFeedback)} 
                >
                                           <Image
       style ={{
        borderColor:'blue',
        borderWidth: 10,
        height: 100,
        width:150,
       }}
       source = {{
        uri: 'https://mirro.io/wp-content/uploads/2021/09/1-feedback-descriptive.jpg'
      }}
      />
      <Text> Get Feedback </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    title="clear"
                    onPress = {() => 
                            {clearData();
                            getFeedback(saveFeedback)
                            }
                        }
                >

<Image
       style ={{
        borderColor:'black',
        borderWidth: 10,
        height: 100,
        width:200,
       }}
       source = {{
        uri: 'https://mma.prnewswire.com/media/1527786/CLEAR_company_Logo.jpg?p=facebook'
      }}
      />
      <Text> Clear </Text>
                </TouchableOpacity>
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
        </SafeAreaView>
    )
}

export default Async5;