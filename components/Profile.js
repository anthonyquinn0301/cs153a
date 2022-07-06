/*
  Page to edit your name and email ...
*/
import React,{useState} from 'react';
import {View,Text,TextInput,Button,SafeAreaView,ScrollView, TouchableOpacity,Image} from 'react-native';
import {useValue} from './ValueStorageContext';

const Profile = () => {
    const {currentValue,setCurrentValue} = useValue();
    const [name,setName] = useState("anon");
    const [email,setEmail] = useState("anon@anon.com");
    

    return (
        <ScrollView>
        <SafeAreaView>
        <View style = {{marginTop:30}}>
            <Text> Profile Page for {name}/{email}</Text>
            <View style={{ flexDirection: 'row'}}>
                <Text> Enter name: </Text>
                <TextInput
                  style={{height: 40, backgroundColor: 'white'}}
                  placeholder="Enter name"
                  onChangeText={newText => setName(newText)}
                  defaultValue={name}
                />
            </View>
           <View style={{ flexDirection: 'row'}}>
           <Text> Enter email: </Text>
            <TextInput
              style={{height: 40, backgroundColor: 'white'}}
              placeholder="Enter email"
              onChangeText={newText => setEmail(newText)}
              defaultValue={email}
            />
            </View>

            <TouchableOpacity
               title="save profile info"
               color="red"
               onPress = {() => {
                setCurrentValue({name:name,email:email});
               }}
               >
                                       <Image
       style ={{
        borderColor:'red',
        borderWidth: 10,
        height: 100,
        width:250,
       }}
       source = {{
        uri: 'https://media.istockphoto.com/vectors/avatars-characters-vector-id518716933?k=20&m=518716933&s=612x612&w=0&h=ILuuszZoMGwALYzSSA4L2xLU-CcB3MQ5BmkYCLpTwv0='
      }}
      />
      <Text> Press to Save Profile Info </Text>
               </TouchableOpacity>
        </View>
        </SafeAreaView>
        </ScrollView>
    )
}
export default Profile