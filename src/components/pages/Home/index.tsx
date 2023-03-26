import * as React from 'react'
import {
    View,
    StyleSheet
} from 'react-native';
import {AnimatedButton} from '../../Items/AnimatedButton'
import {StyledComponentButton} from '../../Items/StyledComponentButton'

import {useSelector, useDispatch} from 'react-redux'
import {ReanimatedButton} from "../../Items/ReanimatedButton";
import {changeButtonsColors} from '../../../redux/features/colorFieldsSlice'
import {AppDispatch, RootState} from "../../../redux/store";

export interface PropsToButton {
    firstColor: string,
    secondColor: string,
    handlePress(): void
}

export const HomeScreen = () => {
    const colorFields = useSelector((state: RootState) => state.colorFields.colorFieldsArray)
    const dispatch: AppDispatch = useDispatch()

    const handleDispatch = () => {
        dispatch(changeButtonsColors())
    }

    return (
        <View style={style.container}>
            <AnimatedButton firstColor={colorFields[0]} secondColor={colorFields[1]} handlePress={handleDispatch}/>
            <StyledComponentButton firstColor={colorFields[1]} secondColor={colorFields[2]}
                                   handlePress={handleDispatch}/>
            <ReanimatedButton firstColor={colorFields[2]} secondColor={colorFields[3]} handlePress={handleDispatch}/>
        </View>

    );

};

const style = StyleSheet.create({
    container: {
        justifyContent: 'center', //Centered horizontally
        alignItems: 'center', //Centered vertically
        flex: 1
    },
});