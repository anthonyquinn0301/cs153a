import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, ActivityIndicator, FlatList, Button } from 'react-native';


const ArtistInfo = () => {

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [temporaryArtistName, setTemporaryArtistname] = useState('');

    const [artistName, setArtistName] = useState('');

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

        <View style={{ flex: 1, padding: 24 }}>

            <TextInput
                style={{ height: 40 }}
                placeholder="Enter artist name."
                onChangeText={newText => setTemporaryArtistname(newText)}
                defaultValue={temporaryArtistName}
            />

            <Button
                title="Enter"
                onPress={() => {
                    setArtistName(temporaryArtistName)
                }}
            />

             <Text>{JSON.stringify(data)}</Text> 

            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>{item.strAlbum} {item.intYearReleased}</Text>
                        

                    )}
                />
            )}
        </View>
    )
}

export default ArtistInfo;