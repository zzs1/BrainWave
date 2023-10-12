import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Pressable, Text} from 'react-native';

export default function PrimaryButton ({navigation}){

    const primaryButtonText = "tests";
    const [isPressed, setIsPressed] = useState(false);

    function handlePress(){
        setIsPressed(true);
        isPressed ? styles.primaryButtonPressed : styles.primaryButton;
    }


    return(
        <View style={styles.container}>
            {/* <StatusBar style="auto" /> */}
                <View>
                    <Pressable style={styles.primaryButton} onPress= {() => { handlePress(); navigation.push('/');}}>
                        <Text style={styles.primaryButtonText}>{primaryButtonText}</Text>
                    </Pressable>
                
                </View>
      

        </View>
    );
}

const styles =  StyleSheet.create({
    primaryButton: {
        width: 330,
        height: 70,
        backgroundColor: '#0C7BDC',
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center',

        shadowOffset: {width: 5, height: 5},
        shadowColor: '#b4b4b4',
        shadowRadius: 10,
        elevation: 4,
        shadowOpacity: 0.9,

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
        color: '#FFFFFF'
    }   
}); 
