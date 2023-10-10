import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { View, Text, StyleSheet,Button, Pressable } from 'react-native';
import { Link } from '@react-navigation/native';

export default function PrimaryButton({navigation}) {

    const [isPressed, setIsPressed] = useState(false);

    return (
        <View style={styles.container}>
        <Link href="/">
          <Pressable style={styles.button}>
            <Text>Button</Text>
          </Pressable>
        </Link>
    </View>
    );
}

const styles = StyleSheet.create({
    
    button:{
        width: '330px',
        height: '70px',
        backgroundColor: '#0C7BDC'
    }
});
