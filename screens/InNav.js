import React from 'react';
import { useEffect, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, View, Image, Pressable, Dimensions, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import animationData from "../assets/Animations/loading-animation.json";

import PrimaryButton from '../components/Atoms/PrimaryButton';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function InNav({ navigation }) {
  const { colors } = useTheme();
  const { dark } = useTheme();

  const [animationVisible, setAnimationVisible] = useState(true);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationVisible(false);
    }, 7000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    // Use a separate useEffect for fading in the content
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <SafeAreaView style={styles.container}>
      {animationVisible && (
      <View style={styles.animationContainer}>
        <LottieView
          autoPlay
          ref={(animationRef) => animationRef && animationRef.play()}
          style={{
            width: screenWidth,
            height: screenHeight,
          }}
          source={animationData}
        />
      </View>
      )}
      <Animated.View style={{ opacity: fadeAnim }}>
          <View style={styles.containerImage}>
            <View style={styles.imgs}>
              <Image source={dark ? require('../assets/Logo/logo-white.png') : require('../assets/Logo/logo-blue.png')} style={styles.imageLogo} />
              <Image source={dark ? require('../assets/Logo/type-white.png') : require('../assets/Logo/type-blue.png')} style={styles.imageType} />
            </View>
            <View style={styles.containerButton}>
              <PrimaryButton name='Get Started' onPress={() => navigation.push('AccessibilityPrompt')} />
            </View>
          </View>
        </Animated.View>
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
  imgs: {
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