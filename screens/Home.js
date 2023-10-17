import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet,Button, TouchableOpacity } from 'react-native';
import SideMenu from '../components/SideMenu'
import PrimaryButton from '../components/PrimaryButton';
import MoveButton from '../components/MoveButton';
import { useNavigation } from '@react-navigation/native';

export default function Home({navigation}) {

    

    return (
        <View style={styles.container}>

   
                {/* <SideMenu /> */}
                <PrimaryButton/>
                <MoveButton/>

            <TouchableOpacity onPress={navigateToQuizTest}>
                <Text style={styles.text}>Test Quiz</Text>
            </TouchableOpacity>

    
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
    text: {
        color: '#b4b4b4',
    }
});
