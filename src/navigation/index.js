import * as React from 'react';
//import * as ReactNavigation from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DestinationScreen from '../screens/DestinationScreen';
import Login from '../screens/Login';
import SeeAll from '../screens/SeeAll';
import NewCostumer from '../screens/NewCostumer';
import Profile from '../screens/Profile';
const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>

        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Destination" component={DestinationScreen} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SeeAll" component={SeeAll}/>
        <Stack.Screen name="NewCostumer" component={NewCostumer}/>
        <Stack.Screen name="Profile" component={Profile}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;