import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useState, useEffect } from 'react';

export default function PrimaryButton({
    name = "",
    onPress = {}
}) {
    const { colors } = useTheme();

    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        if (isPressed) {
            setTimeout(() => {
                setIsPressed(false);
            }, 500)
        }
    })
    return (
        <Pressable onPress={() => {
            onPress();
            setIsPressed(true);
        }} style={styles.container}>
            {/* <StatusBar style="auto" /> */}
            <View style={{
                ...styles.primaryButton,
                backgroundColor: colors.primaryBtnColor
            }}>
                <Text style={styles.primaryButtonText}>{name}</Text>
            </View>
            {
                isPressed ? <></> : <View style={{
                    ...styles.btnShadow,
                    backgroundColor: colors.primaryBtnShadow
                }}></View>
            }
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
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
        zIndex: -1
    },

    primaryButtonText: {
        fontSize: 25,
        color: '#FFFFFF',
    }
}); 
