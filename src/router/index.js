import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AddPayment, ChangePayment, FilterPayment, HomePage, SplashPage } from '../pages'

const Stack = createStackNavigator();

const Router = () => (
    <Stack.Navigator initialRouteName="SplashPage">
        <Stack.Screen name="SplashPage" component={SplashPage} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="AddPayment" component={AddPayment} options={{ headerShown: false }} />
        <Stack.Screen name="ChangePayment" component={ChangePayment} options={{ headerShown: false }} />
        <Stack.Screen name="FilterPayment" component={FilterPayment} options={{ headerShown: false }} />
    </Stack.Navigator>
)

export default Router;