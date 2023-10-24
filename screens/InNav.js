import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, useColorScheme, Image, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../components/Atoms/PrimaryButton';
import NavBar from '../components/Molecules/NavBar';

export default function InNav({navigation}) {

  const [animationWhale, setAnimationWhale] = useState(false);
  const [waves, setWaves] = useState(true);

    var colorScheme = useColorScheme();

    useEffect(() => {
      console.log(colorScheme);
    }, [colorScheme])

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setAnimationWhale(true);
        setWaves(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }, []);

    return (
        <SafeAreaView style={{...styles.container,backgroundColor: colorScheme === 'light' ? '#FFFFFF': '#584b9d'}}>
          {
            waves && (
              <View>
                 <Image source={require('../assets/Waves/wavesNav.png')} style={styles.waves} />
              </View>
            )
          }
            {
            animationWhale && (
        <View style={styles.containerImage}>
          <Image source={require('../assets/Logo/logo-blueNav.png')} style={styles.imageLogo} />
          <Image source={require('../assets/Logo/type-blueNav.png')} style={styles.imageLogo} />
          <View style={styles.containerButton}>
            <Pressable onPress={() => navigation.push('AccessibilityPrompt')}>
              <PrimaryButton name='Get Started' colorBackground='#0C7BDC' shadow='#005AB5'/>
            </Pressable>
            
          </View>
        </View>
          )
            }
          <NavBar color='#005AB5' navigation={navigation}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    pressColor: {
      backgroundColor: 'blue',
    },
    containerButton: {
      marginTop: 200
    },
    containerImage: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 19,
      marginTop: 190,
    },
    waves:{
      flex: 1,
      width: 420, 
      alignItems: 'center',
      marginTop: 760,
    },
    imageLogo: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    imageStyle: {
      
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
