import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, ActivityIndicator, FlatList, Button, SafeAreaView, TouchableOpacity,Image } from 'react-native';
import ValueProvider from './ValueStorageContext';
import { useValue } from './ValueStorageContext';
const ArtistInfo = () => {

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [temporaryArtistName, setTemporaryArtistname] = useState('');
    const [artistName, setArtistName] = useState('');
    const {currentValue,setCurrentValue} = useValue();
    const getRepos = async () => {
        try {
            const response = await fetch('https://theaudiodb.com/api/v1/json/2/discography.php?s='+ artistName );
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => { getRepos() }, [artistName])

    return (
    <SafeAreaView>
        <View style={{  padding: 24, }}>

            <TextInput
                style={{ height: 40 }}
                placeholder="Enter artist name to see their album list. Click on an album to add it to your list."
                onChangeText={newText => setTemporaryArtistname(newText)}
                defaultValue={temporaryArtistName}
            />

            <TouchableOpacity
                title="Enter"
                onPress={() => {
                    setArtistName(temporaryArtistName)
                }}
            >
                                       <Image
       style ={{
        borderColor:'grey',
        borderWidth: 10,
        height: 100,
        width:150,
       }}
       source = {{
        uri: 'https://www.safetysign.com/images/source/large-images/W5424.jpg'
      }}
      />
      
            </TouchableOpacity>

             {/*<Text>{JSON.stringify(data)}</Text> */}

            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data.album}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                    <View style={{flexDirection:'column',
                        padding:10,
                        margin:15,
                        borderWidth:2,
                        justifyContent:'space-evenly',
                        backgroundColor:'green',}}>
                        <Button title = {item.strAlbum} 
                                                onPress = {() => {
                                                    setCurrentValue({ 
                                                        log:(currentValue.log || []).concat([item.strAlbum])})
                                                    }}
                         />
                    </View>

                    )}
                />
            )}
        </View>
        </SafeAreaView>
    )
}

export default ArtistInfo;