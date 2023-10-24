import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, useColorScheme, Image, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressBar from '../components/Atoms/ProgressBar';

export default function Intro({navigation}) {

    var colorScheme = useColorScheme();

    useEffect(() => {
      console.log(colorScheme);
    }, [colorScheme])

    return (
        <SafeAreaView style={{...styles.container,backgroundColor: colorScheme === 'light' ? '#FFFFFF': '#584b9d'}}>
            <View style={styles.bigContainer}>
                <ProgressBar/>
                <Image source={require('../assets/Icons/wimmy.png')} style={styles.imageLogo} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    bigContainer: {
        display: 'flex',
        gap: 100,
    },
    imageLogo: {
        width: 270,
        height: 180,
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
