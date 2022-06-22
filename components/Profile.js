/*
  Page to edit your name and email ...
*/
import React,{useState} from 'react';
import {View,Text,TextInput,Button} from 'react-native';

const Profile = () => {
    const [name,setName] = useState("anon");
    const [email,setEmail] = useState("anon@anon.com");

    return (
        <View>
            <Text> Profile Page</Text>
            <TextInput
        style={{weight: 40}}
        placeholder="Change/enter your profile name here."
        onChangeText={newText => 
             setName(newText)}
        defaultValue={name}
      />
       <TextInput
        style={{weight: 40}}
        placeholder="Change/enter your email here."
        onChangeText={newText => 
             setEmail(newText)}
        defaultValue={email}
      />
            <Text>
        Your profile is {name}.
      </Text>
      <Text>
        Your email is {email}.
      </Text>
        </View>
    )
}	

export default Profile;