
import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, ActivityIndicator, FlatList, Button, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import BMI from './bmi';
import GitHubDemo from './GitHubDemo';
const Developer = () => {
  return (
    <ScrollView>
    <SafeAreaView>
    <View style={styles.container}>
      <View style = {styles.leftCol}>
      <Text style = {styles.title} >About the developer:</Text>
      < Text style = {{
        color:'purple',
        fontSize: 20,
        
      }}> Anthony Quinn is a rising senior at Brandeis University.
      He majors in Musical Studies and minors in Spanish and Computer
       Science. His hobbies include listening to music, playing video games,
       meditiation, and reading. My current goal for this app is to make a dedicated
       musical playlist. It would break itself up into categories
       and when one clicks the buttons, it would take yourself to various
       databases depending on the person's choice.  There is a github repo API and BMI calculator below for fun! Enter your github username to see your repo
       list. Enter your height in inches and weight in pounds to see your Body Mass Index! </Text>
       < Text style ={{
        color: 'red',
        fontSize: 20,
       }}>This is one of his favorite foods to 
       eat: Fried Chicken!</Text>
       <Image
       style ={{
        borderColor:'green',
        borderWidth: 10,
        height: 150,
        width:150,
       }}
       source = {{
        uri: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Crispy-Fried-Chicken_EXPS_TOHJJ22_6445_DR%20_02_03_11b.jpg'
      }}
      />
      <Text style ={{fontSize:40,fontWeight:'bold',backgroundColor:'aqua'}}> Github API Demo</Text>
      <GitHubDemo></GitHubDemo>
      </View>
     <View style = {styles.midCol}>
      <BMI></BMI>
     </View>
      <View style = {styles.rightCol}>
        
      <Text style = {{
        fontSize:40,
        fontWeight:'bold',
        color:'yellow',
      }} >Thanks for viewing/scrolling!</Text>
     
      </View>
    </View>
    </SafeAreaView>
    </ScrollView>
  );
}

export default Developer;

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





