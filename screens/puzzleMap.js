import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, useColorScheme, Image, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../components/Atoms/PrimaryButton';
import LevelIsland from '../components/Molecules/LevelIsland';
import PuzzleMapTitle from '../components/Atoms/PuzzleMapTitle';
import { Button } from 'react-native';
import { useNavigation } from 'expo-router';
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';



export default function PuzzleMap({navigation}) {
  const route = useRoute()
  const title = route.params.title
    var colorScheme = useColorScheme();

    useEffect(() => {
      console.log(colorScheme);
    }, [colorScheme])

    return (
        <SafeAreaView style={{...styles.container,backgroundColor: colorScheme === 'light' ? '#FFFFFF': '#584b9d'}}>
          <PuzzleMapTitle style={styles.gradient} title={title} theme='light'/>
          <View style={styles.islandCont}>
            <View style={styles.islandRight}>
              <LevelIsland locked={true} color='#0C7BDC' shadow='#005AB5'/>
            </View>
            <View style={styles.islandLeft}>
              <LevelIsland locked={true} color='#0C7BDC' shadow='#005AB5'/>
            </View>
            <View style={styles.islandRight}>
              <LevelIsland locked={true} color='#0C7BDC' shadow='#005AB5'/>
            </View>
            <View style={styles.islandLeft}>
              <LevelIsland locked={true} color='#0C7BDC' shadow='#005AB5'/>
            </View>
            <View style={styles.islandRight}>
              <LevelIsland locked={false} color='#0C7BDC' shadow='#005AB5'/>
            </View>
          </View>
          <LinearGradient colors={['transparent','#005AB5']} style={{
            width: 400,
            height: 500,
            position: 'absolute',
            bottom: 0,
            zIndex: -2
          }}></LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    gradient: {
      position: 'absolute',
      top: 50,
      left: 0,
      zIndex: 0
    },
    islandCont: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: 60,
      zIndex: -1
    },
    islandLeft: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: 350
    },
    islandRight: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      width: 350
    },
})