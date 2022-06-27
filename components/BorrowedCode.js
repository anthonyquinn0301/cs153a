/*
<Text> {JSON.stringify(currentValue.log)} </Text>

      <TextInput
                style={{height: 40}}
                placeholder="Enter the Color to add to your Palette"
                onChangeText={newText => setColor(newText)}
                defaultValue={color}
            />
        <Button
                title='add'
                color = '#FAD4D4'
                onPress = {() => {
                    setCurrentValue({ 
                        log:currentValue.log.concat([color])})
                    }}
            />
const Context = () => {
  const data = {log:[]}

  return (
    <ValueProvider value={data}>
        <Palette />
    </ValueProvider>
  )
}

export default Context;
*/