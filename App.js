import React, { Component } from 'react';


import Home from './tabs/Home';
import Cart from './tabs/Cart';
import Menu from './tabs/Menu';
import Rewards from './tabs/Rewards';
import Settings from './tabs/Settings';

import StewsScreen from './containers/StewsScreen'
import ComboScreen from './containers/ComboScreen'
import DrinksScreen from './containers/DrinksScreen'
import FromthegrillScreen from './containers/FromthegrillScreen'
import SpiritsScreen from './containers/SpiritsScreen'
import BeersScreen from './containers/BeersScreen'
import MerchScreen from './containers/MerchScreen'
import CheckoutScreen from './containers/CheckoutScreen'
import MerchStoreFaceMasks from './containers/MerchStoreFaceMasks'
import MerchStoreTshirts from './containers/MerchStoreTshirts'


import { AntDesign } from '@expo/vector-icons';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import styled from 'styled-components';

//import { BlurView } from 'expo-blur';
import { createStore, combineReducers } from 'redux';

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { connect } from 'react-redux'

import * as Network from 'expo-network';
import {Netinfo} from 'react-native-netinfo'

import * as Permissions from 'expo-permissions';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

export default class App extends Component {


  render() {


    registerForPushNotificationsAsync = async () => {
      if (Constants.isDevice) {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
          const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          alert('Failed to get push token for push notification!');
          return;
        }
        const token = await Notifications.getExpoPushTokenAsync();
        console.log(token);
        this.setState({ expoPushToken: token });
      } else {
        alert('Must use physical device for Push Notifications');
      }

      if (Platform.OS === 'android') {
        Notifications.createChannelAndroidAsync('default', {
          name: 'default',
          sound: true,
          priority: 'max',
          vibrate: [0, 250, 250, 250],
        });
      }
      };


    createHomeStack = () =>

      <Stack.Navigator

      screenOptions={{
      headerStyle: {
        backgroundColor: '#b50a04',
         height: 60,

      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}

      >

        <Stack.Screen
          name = "Home"
          component = {Home}
          />
       
        <Stack.Screen
          name = "Menu"
          component = {Menu}

        />
        <Stack.Screen name = "Combo" component = {ComboScreen}/>
        <Stack.Screen
          name = "Stews"
          component = {StewsScreen}
          />
        <Stack.Screen name = "Spirits" component = {SpiritsScreen}/>
        <Stack.Screen name = "Drinks" component = {DrinksScreen}/>
        <Stack.Screen name = "Beers" component = {BeersScreen}/>
        <Stack.Screen name = "Fromthegrill" component = {FromthegrillScreen}/>
        <Stack.Screen name = "Merch" component = {MerchScreen}/>
        <Stack.Screen name = "Rewards" component = {Rewards}/>
        <Stack.Screen name = "CheckoutScreen" component = {CheckoutScreen}/>
        <Stack.Screen name = "MerchStoreFaceMasks" component = {MerchStoreFaceMasks}/>
        <Stack.Screen name = "MerchStoreTshirts" component = {MerchStoreTshirts}/>

      </Stack.Navigator>


      return(
      <Provider store={store}>
        <NavigationContainer>
          <MaterialBottomTabs.Navigator
           //initialRouteName="Home"
            backBehavior="order"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#b50a04' }}
          >

          <MaterialBottomTabs.Screen name="Home" children={createHomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" color="#FFF" size={26} />
            ),
          }}
          />
          <MaterialBottomTabs.Screen name="menu" component={Menu}
          options={{
            tabBarLabel: 'Menu',
            tabBarIcon: ({ color }) => (
              <AntDesign name="bars" color="#FFF" size={26} />
            ),
          }}
          />
          <MaterialBottomTabs.Screen name="Cart" component={Cart}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color }) => (
              <AntDesign name="shoppingcart" color="#FFF" size={26} />
            ),
          }}/>
          <MaterialBottomTabs.Screen name="Rewards" component={Rewards}

          options={{
            headerTitle: 'Rewards',
            tabBarLabel: 'Rewards',
            tabBarIcon: ({ color }) => (
              <AntDesign name="Trophy" color="#FFF" size={26} />

            ),
          }}/>
          <MaterialBottomTabs.Screen name="Settings" component={Settings}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <AntDesign name="setting" color="#FFF" size={26} />
            ),
          }}/>

          </MaterialBottomTabs.Navigator>
        </NavigationContainer>
      </Provider>
      );


    }
  }
