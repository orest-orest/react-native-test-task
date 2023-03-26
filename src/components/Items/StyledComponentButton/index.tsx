import * as React from 'react'
import {useEffect, useRef} from 'react'
import {
    Animated, Pressable, Text
} from 'react-native';
import styled from 'styled-components';
import {PropsToButton} from "../../pages/Home";


const Container = styled.View`
margin: 10px 0;
`;

const AnimatedView = styled(Animated.View)`
 background-color: purple;
       width: 200px;
       height: 80px;
       border-radius: 40px;
       justify-content: center;
       align-items: center;
`;

const StyledText = styled.Text`
        color: #fff;
        font-size: 22px;
`


export const StyledComponentButton = ({firstColor, secondColor, handlePress}: PropsToButton) => {
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
        <Container>
            <Pressable onPress={handlePress}>
                <AnimatedView style={{
                    backgroundColor: startValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [secondColor, firstColor],
                    }),

                }}>
                    <StyledText>Press Me</StyledText>
                </AnimatedView>
            </Pressable>
        </Container>
    )
};
