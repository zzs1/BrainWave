import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Pressable, Text} from 'react-native';

export default function PrimaryButton ({navigation, name="", colorBackground='', shadow=''}){

    const [isPressed, setIsPressed] = useState(false);

    function handlePress(){
        setIsPressed(true);
        isPressed ? styles.primaryButtonPressed : styles.primaryButton;
    }


    return(
        <View style={styles.container}>
            {/* <StatusBar style="auto" /> */}
                <View style={{
                    ...styles.primaryButton,
                    backgroundColor: colorBackground
                }}>
                    <Text style={styles.primaryButtonText}>{name}</Text>
                </View>
                <View style={{
                    ...styles.btnShadow,
                    backgroundColor: shadow
                }}></View>

        </View>
    );
}

const styles =  StyleSheet.create({
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

    primaryButtonPressed: {
        width: 330,
        height: 70,
        backgroundColor: '#0C7BDC',
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center',

        shadowOffset: {width: 5, height: 5},
        shadowColor: '#b4b4b4',
        shadowRadius: 10,
        elevation: 0,

    },

    primaryButtonText: {
        fontSize: 25,
        color: '#FFFFFF',
    }   
}); 
