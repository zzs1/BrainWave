import { StyleSheet, View, Pressable, Text, Animated } from 'react-native';
import { useRef } from 'react';
import { useTheme } from '@react-navigation/native';


export default function CarouselButton({
    btnText = '',
    onPress = {}
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
            <Animated.View style={{
                ...styles.carouselButton,
                backgroundColor: colors.primaryBtnColor,
                transform: [{ translateY }]
            }}>
                <Text style={{
                    ...styles.carouselButtonText,
                    color: colors.btnText
                }}>{btnText}</Text>
            </Animated.View>

            <View style={{
                ...styles.btnShadow,
                backgroundColor: colors.primaryBtnShadow
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
        fontSize: 20,
        fontWeight: 'bold',
    },
}); 
