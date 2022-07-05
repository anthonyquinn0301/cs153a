/*
  Page to edit your name and email ...
*/
import React,{useState} from 'react';
import {View,Text,TextInput,Button} from 'react-native';
import {useValue} from './ValueStorageContext';

const Profile = () => {
    const {currentValue,setCurrentValue} = useValue();
    const [name,setName] = useState("anon");
    const [email,setEmail] = useState("anon@anon.com");
    

    return (
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

            <Button 
               title="save profile info"
               color="red"
               onPress = {() => {
                setCurrentValue({name:name,email:email});
               }}
               />
        </View>
    )
}
export default Profile