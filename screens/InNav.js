import React from 'react';
import { useEffect, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, View, Image, Pressable, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PrimaryButton from '../components/Atoms/PrimaryButton';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function InNav({ navigation }) {
  const { colors } = useTheme();
  const { dark } = useTheme();

  const [animationWhale, setAnimationWhale] = useState(false);
  const [waves, setWaves] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationWhale(true);
      setWaves(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
            <View style={styles.imgs}>
              <Image source={dark ? require('../assets/Logo/logo-white.png') : require('../assets/Logo/logo-blue.png')} style={styles.imageLogo} />
              <Image source={dark ? require('../assets/Logo/type-white.png') : require('../assets/Logo/type-blue.png')} style={styles.imageType} />
            </View>
            <View style={styles.containerButton}>
              <Pressable onPress={() => navigation.push('AccessibilityPrompt')}>
                <PrimaryButton name='Get Started' colorBackground='#0C7BDC' shadow='#005AB5' />
              </Pressable>
            </View>
          </View>
        )
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: screenWidth,
    height: screenHeight
  },
  containerImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 19,
    paddingTop: 190,
    paddingBottom: 100,
    height: screenHeight,
  },
  imgs:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 230
  },
  waves: {
    flex: 1,
    width: 420,
    alignItems: 'center',
    marginTop: 760,
  },
  imageLogo: {
    width: 155,
    height: 165,
    objectFit: 'contain'
  },
  imageType: {
    width: 265,
    height: 37,
    objectFit: 'contain'
  }
});
