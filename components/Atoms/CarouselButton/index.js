import React from 'react';
import { StyleSheet, View, Pressable, Text, Animated } from 'react-native';
import { useRef } from 'react';
import { useTheme } from '@react-navigation/native';
import { Audio } from 'expo-av';

import { AppContext } from '../../../context/AppContext'

export default function CarouselButton({
    btnText = '',
    onPress = {}
}) {
    const { isColorBlind, isDyslexic } = React.useContext(AppContext);
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
            <Animated.View style={{
                ...styles.carouselButton,
                backgroundColor: isColorBlind ? colorBlindColors.primaryColor : colors.primaryBtnColor,
                transform: [{ translateY }]
            }}>
                <Text style={{
                    ...styles.carouselButtonText,
                    color: colors.btnText,
                    fontFamily: isDyslexic ? 'Lexend-Bold': 'Poppins-Bold'
                }}>{btnText}</Text>
            </Animated.View>

            <View style={{
                ...styles.btnShadow,
                backgroundColor: isColorBlind ? colorBlindColors.primaryColorShadow : colors.primaryBtnShadow
            }}></View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: 70
    },
    carouselButton: {
        width: 185,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnShadow: {
        width: 185,
        height: 60,
        borderRadius: 10,
        marginTop: -50,
        zIndex: -1
    },
    carouselButtonText: {
        fontSize: 20
    },
}); 
