import * as React from 'react'
import {useEffect} from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    FlatList
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux'
import {fetchContent} from "../../../redux/features/fetch";
import {AppDispatch, RootState} from "../../../redux/store";



export const AdditionalScreen = () => {
    const content = useSelector((state: RootState) => state.contentSlice)
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchContent())
    }, [])

    const handleFetch = () => {
        dispatch(fetchContent())
    }

    return (
        <View style={styles.container}>
            {content.isLoading ? <Text>Loading</Text> : <FlatList
                data={content.contents}
                renderItem={({item}) => <View style={styles.item}><Text>{item.title}</Text><Text>{item.body}</Text></View>}
                keyExtractor={item => item.id}
            />}
            <View  style={styles.buttonContainer}><Button onPress={handleFetch} title="fetch again"/></View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
    },
    item: {
       marginTop: 5,
        marginBottom: 5,
    },
    buttonContainer: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10,

    }
});