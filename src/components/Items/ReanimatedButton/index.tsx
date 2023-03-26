import * as React from 'react'
import {useEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, {
    interpolateColor,
    useAnimatedStyle,
    withTiming,
    useSharedValue,
} from 'react-native-reanimated';
import {PropsToButton} from "../../pages/Home";


export function ReanimatedButton({firstColor, secondColor, handlePress}: PropsToButton) {

    const progress = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                progress.value,
                [0, 1],
                [secondColor, firstColor]
            ),

        }
    }, [firstColor, secondColor])

    useEffect(() => {
        progress.value = 0
        progress.value = withTiming(1, {duration: 1000})
    }, [firstColor, secondColor])

    return (
        <View style={styles.container}>
            <Pressable onPress={handlePress}>
                <Animated.View
                    style={[styles.button, animatedStyle]}>
                    <Text style={styles.buttonText}>Press Me</Text>
                </Animated.View>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
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