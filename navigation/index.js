import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Result from '../screens/result';
import Config from '../screens/config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
      <NavigationContainer>
        <SafeAreaProvider>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
                <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
                <Stack.Screen name="Config" component={Config} options={{ headerShown: false }} />
            </Stack.Navigator>
          </SafeAreaProvider>
      </NavigationContainer>
  );
}

export default MyStack;
