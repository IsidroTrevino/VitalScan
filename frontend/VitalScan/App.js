import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AboutApp from './pages/AboutApp'; 
import Form from './pages/Form'; 
import Support from './pages/Support'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }}  
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="AboutApp" 
          component={AboutApp} 
          options={{ headerShown: false }}  
        />
        <Stack.Screen 
          name="Form" 
          component={Form} 
          options={{ headerShown: false }}  
        />
        <Stack.Screen 
          name="Support" 
          component={Support} 
          options={{ headerShown: false }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
