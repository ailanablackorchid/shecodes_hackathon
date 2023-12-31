import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Help from '../screens/HelpScreen/HelpScreen';
import Map from '../screens/MapScreen/MapScreen';
import Stories from '../screens/StoriesScreen/StoriesScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from 'react-native'; 
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const HelpdIcon = ({focused, color, size}: any) => <Ionicons focused={focused} name='md-refresh-circle' size={size} color={color} />
const MapIcon =({focused, color, size}: any) => <Ionicons focused={focused} name='md-cart' size={size} color={color} />


const MainDrawer = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="MainScreen">
      <Stack.Screen name="MainDashboard">
        {() => (
          <Drawer.Navigator 
          screenOptions={{
            drawerStyle:{
              backgroundColor:'white',   //change bg color
              width:230    //change width of sidebar 
            }
          }}
          >
            <Drawer.Screen name="MainScreen" component={Map} options={{ drawerIcon: MapIcon }} />
            <Drawer.Screen name="Help" component={Help} options={{ drawerIcon: HelpdIcon }} />
          </Drawer.Navigator>
        )}
      </Stack.Screen>
      <Stack.Screen name="Stories" component={Stories} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default MainDrawer;