import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text, Animated } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useEffect, useRef } from 'react';
import { Audio } from 'expo-av';

import { AppContext } from '../../../context/AppContext'

export default function OptionBtn({
    name = "",
    onPress = {},
    color,
    shadow
}) {
    const { isColorBlind, isDyslexic } = React.useContext(AppContext);
    const { colorBlindColors } = useTheme();

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

    const [sound, setSound] = React.useState();

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync( require('../../../assets/sound/button-click.mp3')
        );
        setSound(sound);

        await sound.playAsync();
    }

    React.useEffect(() => {
        return sound
        ? () => {
            sound.unloadAsync();
            }
        : undefined;
    }, [sound]);

    return (
        <Pressable
            onPress={playSound}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={styles.container}
        >
            {/* <StatusBar style="auto" /> */}
            <Animated.View
                style={{
                    ...styles.primaryButton,
                    backgroundColor: isColorBlind ? colorBlindColors.primaryColor : color,
                    transform: [{ translateY }],
                }}
            >
                <Text style={{
                    ...styles.primaryButtonText,
                    fontFamily: isDyslexic ? 'Lexend-Bold': 'Poppins-Bold'
                }}>{name}</Text>
            </Animated.View>
            <View
                style={{
                    ...styles.btnShadow,
                    backgroundColor: isColorBlind ? colorBlindColors.primaryColorShadow : shadow,
                }}
            ></View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
    },

    primaryButton: {
        width: 150,
        minHeight: 60,
        borderRadius: 10,
        // display: 'flex',
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnShadow: {
        width: 150,
        minHeight: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -50,
        zIndex: -1,
    },

    primaryButtonText: {
        fontSize: 18,
        color: '#FFFFFF',
    },
});
