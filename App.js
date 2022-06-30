
import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, ActivityIndicator, FlatList, Button, StyleSheet, Image } from 'react-native';
import BMI from './components/bmi';
import GitHubDemo from './components/GitHubDemo';
import TabStackDemoWithContext from './components/TabStackDemoWithContext';
import SongList from './components/SongList';
import AsyncContextDemo from './components/AsyncContextDemo copy';
import ArtistInfo from './components/ArtistInfo';
export default function App() {
  return (
    <TabStackDemoWithContext/>
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





