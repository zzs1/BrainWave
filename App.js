import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import AccessibilityPromptSecond from './screens/AccessibilityPromptSecond';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import InNav from './screens/InNav';

export default function App() {
  const Stack = createNativeStackNavigator();
  var colorScheme = useColorScheme();
  
  useEffect(() => {
    console.log(colorScheme);
  }, [colorScheme])

  return (
    <SafeAreaView style={{...styles.container,backgroundColor: colorScheme === 'light' ? '#FFFFFFc': '#584b9d'}}>
      <NavigationContainer initialRouteName='Landing'>
        <Stack.Navigator name='Landing' component={InNav}/>
      </NavigationContainer>
    </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
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
