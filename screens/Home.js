import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import SideMenu from '../components/SideMenu'
import PrimaryButton from '../components/PrimaryButton';
import MoveButton from '../components/MoveButton';

export default function Home({navigation}) {

    return (
        <View style={styles.container}>

   
    {/* <SideMenu /> */}
    <PrimaryButton/>
    <MoveButton/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
    },
});
