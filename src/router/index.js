import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomePage, SplashPage } from '../pages'

const Stack = createStackNavigator();

const Router = () => (
    <Stack.Navigator initialRouteName="SplashPage">
        <Stack.Screen name="SplashPage" component={SplashPage} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
    </Stack.Navigator>
)

export default Router;