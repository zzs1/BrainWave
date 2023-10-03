import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';


export default function Home({navigation}) {

    return (
        <View style={styles.container}>
        <Text>Welcome!</Text>
        <StatusBar style="auto" />
        <Button 
            title="Go to about page"
            onPress={() => navigation.push('About')}
        />
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
