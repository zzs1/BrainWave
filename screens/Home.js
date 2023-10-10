import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import SideMenu from '../components/SideMenu'
import PrimaryButton from '../components/PrimaryButton';

export default function Home({navigation}) {

    return (
        <View style={styles.container}>
        <Text>Welcome!</Text>
   
    {/* <SideMenu /> */}
    <PrimaryButton/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{

    }
});
