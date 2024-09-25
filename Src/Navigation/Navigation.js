
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
// Import your screens
import Signin from '../Component/Signin';
import Signup from '../Component/Signup';
import Start from '../Component/Start';
import Home from '../Component/Home';
import Profile from '../Component/Profile';
import COLORS from '../Const/Color';
import Services from '../Component/Services';
import Details from '../Component/Details';
import Onboarding from '../Component/Onboarding';
import SearchScreen from '../Component/SearchScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        tabBarActiveTintColor: COLORS.yellow,
        tabBarInactiveTintColor:COLORS.DARK_FOUR
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={28} />
          ),
          headerShown: false,
        }}
      />
       <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="miscellaneous-services" size={24} color={color}/>
          ),
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="Search"
        component={SearchBar}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={28} />
          ),
          headerShown: false,
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" color={color} size={28} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

// Main Navigation using Stack Navigator
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Authentication Screens */}
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        
        {/* Post-login screens with Bottom Tabs */}
        <Stack.Screen
          name="Home" 
          component={BottomTabs}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Details" 
          component={Details}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="onboarding" 
          component={Onboarding}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="SearchScreen" 
          component={SearchScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
