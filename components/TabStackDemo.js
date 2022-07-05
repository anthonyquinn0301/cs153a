import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useValue} from './ValueStorageContext';
import Developer from './Developer';
import SongList from './SongList';
import ProfileScreen from './Profile';
import ArtistInfo from './ArtistInfo';
import FeedbackFormScreen from './FeedbackForm';
import FeedbackListScreen from './FeedbackList';
function SongListScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Album List!</Text>
      <SongList />
    </View>
  );
}

// access the profile info from this page ...
function HomeScreen({ navigation }) {
    const {currentValue} = useValue();
  return (
    <View style={{flexDirection:'column',
    padding:15,
    margin:5,
    borderWidth:2,
    justifyContent:'space-evenly',
    backgroundColor:'green',
    flex:1}}>
      <Text>Home screen for {currentValue.name}   
             with email {currentValue.email}</Text>
             <View style={{flexDirection:'column',
                                    padding:15,
                                    margin:5,
                                    borderWidth:2,
                                    justifyContent:'space-evenly',
                                    backgroundColor:'#fedcba',
                                    flex:1}}>      
      <Button
        title="Go to Album list"
        onPress={() => navigation.navigate('SongList')}
      />
      <Button 
      title="Go to Profile Page" 
      onPress ={() =>
      navigation.navigate('Profile')} />
      <Button 
      title="Go to Developer Page" 
      onPress = {() => navigation.navigate('Developer')}/>

      <Button 
      title="Go to Artist Info Page" 
      onPress = {() => navigation.navigate('ArtistInfo')}/>    

  
</View>



    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <View style={{flexDirection:'column',
                                    padding:15,
                                    margin:5,
                                    borderWidth:2,
                                    justifyContent:'space-evenly',
                                    backgroundColor:'#fedcba',
                                    flex:1}}>  
      <Button
        title="Go to Album List"
        onPress={() => navigation.navigate('SongList')}
      />
      <Button 
      title="Go to Profile Page" 
      onPress ={() =>
      navigation.navigate('Profile')} />
      <Button 
      title="Go to Developer Page" 
      onPress = {() => navigation.navigate('Developer')}/>
      <Button 
      title="Go to Home Page" 
      onPress = {() => navigation.navigate('Home')}/>

      <Button 
      title="Go to Artist Info Page" 
      onPress = {() => navigation.navigate('ArtistInfo')}/>


    </View>        
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} 
         />
      <HomeStack.Screen name="SongList" component={SongListScreen} 
         />
      <HomeStack.Screen name="Profile" component={ProfileScreen} 
         />
       <HomeStack.Screen name="Developer" component={Developer} 
         />   
    
        <HomeStack.Screen name="ArtistInfo" component={ArtistInfo} 
         />  
       
             
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen({navigation}) {
  return (
    <SettingsStack.Navigator>

      <SettingsStack.Screen name="SongList" component={SongListScreen} 
      />
      <SettingsStack.Screen name="Home" component={HomeScreen} 
      />     
      <SettingsStack.Screen name="Profile" component={ProfileScreen} 
         />
      <SettingsStack.Screen name="Developer" component={Developer} 
         />  
      <SettingsStack.Screen name="ArtistInfo" component={ArtistInfo} 
         />  


    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} 
          options={{
            headerShown: false
        }}/>

        <Tab.Screen name="Profile" component={ProfileScreen} 
        options={{
            headerShown: false
        }}/>
        <Tab.Screen name="Developer" component={Developer} 
        options={{
            headerShown: false
        }}/>
        <Tab.Screen name="Album List" component={SongListScreen} 
        options={{
            headerShown: false
        }}/>  
  
        <Tab.Screen name="Artist Info" component={ArtistInfo} 
        options={{
            headerShown: false
        }}/>   

        <Tab.Screen name="Feedback" component={FeedbackFormScreen} 
        options={{
            headerShown: false
        }}/>      

        <Tab.Screen name="SeeFeedBack" component={FeedbackListScreen} 
        options={{
            headerShown: false
        }}/>   
      </Tab.Navigator>
    </NavigationContainer>
  );
}