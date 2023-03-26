import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {HomeScreen} from "./src/components/pages/Home";
import {AdditionalScreen} from "./src/components/pages/Additional";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen}/>
                    <Tab.Screen name="Additional" component={AdditionalScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

