import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text, Animated } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useEffect, useRef } from 'react';

export default function PrimaryButton({
    name = "",
    onPress = {}
}) {
    const { colors } = useTheme();

    const translateY = useRef(new Animated.Value(0)).current;

    const handlePressIn = () => {
        Animated.timing(translateY, {
            toValue: 10,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.timing(translateY, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start(() => {
            onPress();
        });
    };

    return (
        <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={styles.container}
        >
            {/* <StatusBar style="auto" /> */}
            <Animated.View
                style={{
                    ...styles.primaryButton,
                    backgroundColor: colors.primaryBtnColor,
                    transform: [{ translateY }],
                }}
            >
                <Text style={styles.primaryButtonText}>{name}</Text>
            </Animated.View>
            <View
                style={{
                    ...styles.btnShadow,
                    backgroundColor: colors.primaryBtnShadow,
                }}
            ></View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },

    primaryButton: {
        width: 330,
        height: 70,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnShadow: {
        width: 330,
        height: 70,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -60,
        zIndex: -1,
    },

    primaryButtonText: {
        fontSize: 25,
        color: '#FFFFFF',
    },
});
