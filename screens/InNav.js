import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Button,useColorScheme, Image, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../components/Atoms/PrimaryButton';
import PuzzleMapDropdown from '../components/Molecules/PuzzleMapDropdown';
import SubMenu from '../components/Molecules/SubMenuItem';




export default function InNav({navigation}) {

    var colorScheme = useColorScheme();

    useEffect(() => {
      console.log(colorScheme);
    }, [colorScheme])

    return (
        <SafeAreaView style={{...styles.container,backgroundColor: colorScheme === 'light' ? '#FFFFFF': '#584b9d'}}>
          <SubMenu />
            <View style={styles.containerImage}>
                <Image source={require('./Jerry/logo-blue.png')} style={styles.imageLogo} />
                <Image source={require('./Jerry/type-blue.png')} style={styles.imageStyle} />
                <View style={styles.containerButton}>
                  <PrimaryButton style={styles.containerImage}/>
                </View>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    },
    pressColor: {
      backgroundColor: 'blue',
    },
    containerButton: {
      marginTop: 260,
    },
    containerImage: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: 19,
      marginTop: 220,

    },
    imageLogo: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    imageStyle: {
      
    },

    lightContainer: {
      backgroundColor: '#FFFFFF',
    },
    darkContainer: {
      backgroundColor: '#584b9d',
    },
    lightThemeText: {
      color: '#FFFFFF',
    },
    darkThemeText: {
      color: '#FFFFFF',
    }
  });
