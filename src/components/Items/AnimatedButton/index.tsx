import * as React from 'react'
import {useEffect, useRef} from 'react'
import {
    StyleSheet, View, Animated, Pressable, Text
} from 'react-native';
import {PropsToButton} from "../../pages/Home";


export const AnimatedButton = ({firstColor, secondColor, handlePress}: PropsToButton) => {

    const startValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        startValue.setValue(0)
        Animated.timing(startValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }, [firstColor, secondColor]);


    return (
        <View style={style.container}>
            <Pressable onPress={handlePress}>
                <Animated.View
                    style={[style.button, {
                        backgroundColor: startValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [secondColor, firstColor],
                        }),

                    }]}>
                    <Text style={style.buttonText}>Press Me</Text>
                </Animated.View>
            </Pressable>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    button: {
        backgroundColor: 'purple',
        width: 200,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
    },
});

