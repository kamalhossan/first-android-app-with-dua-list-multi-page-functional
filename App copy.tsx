/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutScreen from './screens/AboutPage';
import Duas from './screens/DuaTab';
import DuaDetails from './component/DuaDetails';

function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: 'মুসলমানের আমল',
            headerStyle: {backgroundColor: '#9DFC6F'},
          }}
        />
        <Stack.Screen
          name="Dua"
          component={Duas}
          options={{
            title: 'দৈনদিন এর দোয়া',
            headerStyle: {backgroundColor: '#9DFC6F'},
          }}
        />
        <Stack.Screen
          name="SingleItem"
          component={DuaDetails}
          options={({route}) => ({
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  homeContainer: {},
});
