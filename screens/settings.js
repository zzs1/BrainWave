import React from 'react';
import { StyleSheet, Text, View, useColorScheme, Image, Pressable, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useState, useEffect } from 'react';

import { AppContext } from '../context/AppContext.js'
import { Button } from 'react-native';

export default function Settings({navigation}) {
    const { isDarkTheme, setIsDarkTheme } = React.useContext(AppContext)

  return (
    <SafeAreaView style={styles.container}>
      <Button title='Change Theme' onPress={() => setIsDarkTheme(current => !current)}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingTop: 50
  }
})