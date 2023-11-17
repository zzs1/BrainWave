import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Animated} from 'react-native';
import { Image } from 'expo-image';

import { useRef } from 'react';
import { useTheme } from '@react-navigation/native'

import ArrowLeft from '../../../assets/Icons/arrowLeft.png'
import ArrowRight from '../../../assets/Icons/arrowRight.png'

import { AppContext } from '../../../context/AppContext'

export default function MoveButton ({
    direction='',
    onPress={}
}){
    const { isColorBlind } = React.useContext(AppContext);
    const { colors, colorBlindColors } = useTheme();

    const translateY = useRef(new Animated.Value(0)).current;

    const handlePressIn = () => {
        Animated.timing(translateY, {
            toValue: 10,
            duration: 150,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.timing(translateY, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true,
        }).start(() => {
            onPress();
        });
    };

    return(
        <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut} 
            style={styles.container}
        >
            <Animated.View style={{
                ...styles.btn,
                backgroundColor: isColorBlind ? colorBlindColors.primaryColor : colors.primaryBtnColor,
                transform: [{ translateY }]
            }}>
                <Image style={styles.arrow} source={direction === 'right' ? ArrowRight : ArrowLeft}/>
            </Animated.View>
            <View style={{
                ...styles.btnShadow,
                backgroundColor: isColorBlind ? colorBlindColors.primaryColorShadow : colors.primaryBtnShadow
            }}></View>
        </Pressable>
    );
}

const styles =  StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: 70
    },
    btn: {
        width: 70,
        height: 60,
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnShadow: {
        width: 70,
        height: 60,
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -50,
        zIndex: -1
    },
    arrow: {
        width: 30,
        height:30
    }
}); 
