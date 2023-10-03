import React, { useState } from 'react';
import { Text, StyleSheet, View, useColorScheme, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // automatically switches bar style based on theme!

export default function App() {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  const themeTextStyle = isDarkMode ? styles.darkThemeText : styles.lightThemeText;
  const themeContainerStyle = isDarkMode ? styles.darkContainer : styles.lightContainer;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Text style={[styles.text, themeTextStyle]}>Color scheme: {colorScheme}</Text>
      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme}
        trackColor={{ false: '#d0d0c0', true: '#242c40' }}
        thumbColor={'#ffffff'}
      />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
});