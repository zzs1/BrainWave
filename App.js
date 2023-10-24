import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import InNav from './screens/InNav';
import AccessibilityPrompt from './screens/AccessibilityPrompt';
import Intro from './screens/Intro';

export default function App() {
  const Stack = createNativeStackNavigator();
  var colorScheme = useColorScheme();
  
  useEffect(() => {
    console.log(colorScheme);
  }, [colorScheme])

  return (
    <SafeAreaView style={{...styles.container,backgroundColor: colorScheme === 'light' ? '#FFFFFFc': '#584b9d'}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Landing'>
          <Stack.Screen name='Landing' component={InNav} options={{headerShown: false}}/>
          <Stack.Screen name='AccessibilityPrompt' component={AccessibilityPrompt} options={{headerShown: false}}/>
          <Stack.Screen name="Intro" component={Intro} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  lightContainer: {
    backgroundColor: '#FFFFFF',
  },
  darkContainer: {
    backgroundColor: '#584b9d',
  },
  lightThemeText: {
    color: '#FFFFFF',
  },
  darkThemeText: {
    color: '#FFFFFF',
  }
});
