import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, AsyncStorage } from 'react-native';

const NamedCounter = ({ label, value, updateTotal }) => {

  const [count, setCount] = useState(0);
  const [coins, setCoins] = useState(0);

  return (
    <View style={styles.container}>

      <Text>The coin count is {coins}, </Text>
      <Text>The counter value is ${count / 100} </Text>
      <View style={styles.buttonView}>
        <Button
          title={label}
          color="blue"
          onPress={() => {
            setCount((count + value));
            updateTotal(value);
            setCoins(coins + 1);
            }
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  buttonView: {
    flexDirection: "row"
  }

});
export default NamedCounter;