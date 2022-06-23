import React from 'react';
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import InputsScreen from '../screens/InputsScreen';

export type RootStackParams = {
  Inputs: undefined
};

const LogoHeader = (): JSX.Element => <Image source={require('../../assets/passio-logo.png')} style={{ height: 40, width: 40 }}/>

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStack = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Inputs'
        screenOptions={{ headerTitle: () => <LogoHeader/> }}
      >
        <Stack.Screen name='Inputs' component={InputsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
