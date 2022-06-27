import React,{useState} from "react";
import ValueProvider from './ValueContext';
import AsyncDemo from './AsyncDemo';

import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  const [data,setData] = useState({username:'anon'});
  useEffect(() => {getData()},[])

  const getData = async () => {
    try {
    
      const jsonValue = await AsyncStorage.getItem('@async')
      let data = null
      if (jsonValue!=null) {
        data = JSON.parse(jsonValue)
        
        console.log('just set Info, Name and Email')
      } else {
        console.log('just read a null value from Storage')
      
      }
    } catch(e) {
  
     
      console.dir(e)
      
    }
}

const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@async', jsonValue)
      console.log('just stored '+jsonValue)
    } catch (e) {
      
      console.dir(e)
      
    }
}

  return (
    <ValueProvider value={data}>
        <AsyncDemo />
    </ValueProvider>
  )
}

export default App;