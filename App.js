import React, { useState } from 'react';
import { Text, StyleSheet, View, useColorScheme, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // automatically switches bar style based on theme!
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const Stack = createNativeStackNavigator();

  // const colorScheme = useColorScheme();
  // const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  // const themeTextStyle = isDarkMode ? styles.darkThemeText : styles.lightThemeText;
  // const themeContainerStyle = isDarkMode ? styles.darkContainer : styles.lightContainer;

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  return (

    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaView>


    //  <View style={[styles.container, themeContainerStyle]}>

    //   <Text style={[styles.text, themeTextStyle]}>Color scheme: {colorScheme}</Text>
    //   <Switch
    //     value={isDarkMode}
    //     onValueChange={toggleTheme}
    //     trackColor={{ false: '#d0d0c0', true: '#242c40' }}
    //     thumbColor={'#ffffff'}
    //   /> 
 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // lightContainer: {
  //   backgroundColor: '#d0d0c0',
  // },
  // darkContainer: {
  //   backgroundColor: '#242c40',
  // },
  // lightThemeText: {
  //   color: '#242c40',
  // },
  // darkThemeText: {
  //   color: '#d0d0c0',
  // },
});