import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';
import { useTheme } from '@react-navigation/native';
import animationData from '../../../assets/Animations/wimmy-thinking.json';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function WimmyThinking(){
    return (
    <View style={styles.animationContainer}>
        <LottieView
          autoPlay
          ref={(animationRef) => animationRef && animationRef.play()}
          style={{
            width: 100,
            height: 100,
          }}
          source={animationData}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    animationContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
