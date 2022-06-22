import React,{useState} from 'react';
import {View,Text} from 'react-native';
import NamedCounter from './NamedCounter';

export default function CounterDemo() {
  
    const [total, setTotal] = useState(0)
    const [totalCoins, setTotalCoins] = useState(0)
  
    const updateTotal = (v) => {setTotal(v + total); setTotalCoins(totalCoins + 1)};
  
  
    return (
      <View>
        <Text>Total value is ${total / 100} </Text>
        <Text>Total amount of coins are {totalCoins} </Text>
  
        <View style={{ flexDirection: "row" }}>
          <NamedCounter label="Penny" value={1} updateTotal={updateTotal} />
          <NamedCounter label="Nickel" value={5} updateTotal={updateTotal}/>
          <NamedCounter label="Dime" value={10} updateTotal={updateTotal} />
          <NamedCounter label="Quarter" value={25} updateTotal={updateTotal} />
        </View>
      </View>
  
    );
  }