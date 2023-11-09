import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text, Animated } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useEffect, useRef } from 'react';

export default function OptionBtn({
    name = "",
    onPress = {},
    color,
    shadow
}) {
    const { colors } = useTheme();

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
                    backgroundColor: color,
                    transform: [{ translateY }],
                }}
            >
                <Text style={styles.primaryButtonText}>{name}</Text>
            </Animated.View>
            <View
                style={{
                    ...styles.btnShadow,
                    backgroundColor: shadow,
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
        height: 60,
        borderRadius: 10,
        // display: 'flex',
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnShadow: {
        width: 150,
        height: 60,
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
