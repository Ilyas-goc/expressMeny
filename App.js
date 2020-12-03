import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import CustomModal from './CustomModal';
import MenuScreen from './MenuScreen';
import Home from './screens/Home';
import Cart from './screens/Cart';
import Edit from './screens/Edit';
import Start from './screens/Start';


import { Provider } from 'react-redux';
import store from './store.js'
/////////////////////////////////////////////////////////////////////////////
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAPwEvCUsc6icKaQ201gYwH7TOhHSBIroI",
  authDomain: "android-sis.firebaseapp.com",
  databaseURL: "https://android-sis.firebaseio.com",
  projectId: "android-sis",
  storageBucket: "android-sis.appspot.com",
  messagingSenderId: "286934101745",
  appId: "1:286934101745:web:e284e3190c3b2088f5c350",
  measurementId: "G-0817GZTXFP"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
////////////////////////////////////////////////////////////////////////////


const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen name="Start" component={Start} />              
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="MenuItem" component={MenuScreen} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Edit" component={Edit} />
          </Stack.Navigator>
        </NavigationContainer >
      </Provider>
    );
  }
}

const width = Dimensions.get("screen").width;

export default App;