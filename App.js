
import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, ActivityIndicator, FlatList, Button, StyleSheet, Image } from 'react-native';
import BMI from './components/bmi';
import GitHubDemo from './components/GitHubDemo';
export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.leftCol}>
      <Text style = {styles.title} >About the developer:</Text>
      < Text style = {{
        color:'purple',
        fontSize: 25,
        
      }}> Anthony Quinn is a rising senior at Brandeis University.
      He majors in Musical Studies and minors in Spanish and Computer
       Science. His hobbies include listening to music, playing video games,
       meditiation, and reading. My current goal for this app is to make a dedicated
       musical playlist. It would break itself up into categories
       and when one clicks the buttons, it would take yourself to various
       databases depending on the person's choice. </Text>
       < Text style ={{
        color: 'red',
        fontSize: 20,
       }}>This is one of my favorite foods to 
       eat: Fried Chicken!</Text>
       <Image
       style ={{
        borderColor:'green',
        borderWidth: 10,
        height: 200,
        width:300,
       }}
       source = {{
        uri: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Crispy-Fried-Chicken_EXPS_TOHJJ22_6445_DR%20_02_03_11b.jpg'
      }}
      />
      </View>
      <View style = {styles.midCol}>
        <BMI />
      </View>
      <View style = {styles.rightCol}>
      <Text style = {{
        fontSize:40,
        fontWeight:'bold',
        color:'yellow',
      }} >Github API Username Search</Text>
        <GitHubDemo />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',

  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: 'green',
    padding:10,
   
  },
  midCol:{
      flex:1,
      textAlign: 'center',
      backgroundColor: 'white',

  },
  leftCol: {
    justifyContent:'space-evenly',
    backgroundColor: 'yellow',
  },
  rightCol: {
    justifyContent: 'flex-end',
    backgroundColor: 'blue',
  },
});





