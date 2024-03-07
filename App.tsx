/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutScreen from './screens/AboutPage';
import Duas from './screens/DuaTab';
import DuaDetails from './component/DuaDetails';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DuaTab from './screens/DuaTab';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#7478F5"
        inactiveColor="#3e2465"
        tabBarIcon="true">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="alpha-i-circle-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen name="Dua" component={DuaTab} />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="settings" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  homeContainer: {},
});
