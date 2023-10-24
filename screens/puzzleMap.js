import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, useColorScheme, Image, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import LevelIsland from '../components/Molecules/LevelIsland';
import PuzzleMapTitle from '../components/Atoms/PuzzleMapTitle';
import NavBar from '../components/Molecules/NavBar';
import WimmyPopup from '../components/Molecules/WimmyPopup';



export default function PuzzleMap({navigation}) {
  const route = useRoute()
  const title = route.params.title
    var colorScheme = useColorScheme();

    useEffect(() => {
      console.log(colorScheme);
    }, [colorScheme])

    return (
        <SafeAreaView style={{...styles.container,backgroundColor: colorScheme === 'light' ? '#FFFFFF': '#1E1E1E'}}>
            <WimmyPopup title='WIMMY SAYS...' desc="Let's start solving some puzzles!" instuction='tap to continue'/>
          <View style={styles.gradient}>
            <PuzzleMapTitle title={title} theme='light'/>
          </View>
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
                <Pressable>
                    <LevelIsland locked={false} color='#0C7BDC' shadow='#005AB5'/>
                </Pressable>
            </View>
          </View>
          <LinearGradient colors={['transparent','#0C7BDC']} style={{
            width: 400,
            height: 500,
            position: 'absolute',
            bottom: 0,
            zIndex: -2
          }}></LinearGradient>
          <NavBar color='#0C7BDC' navigation={navigation}/>
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
      top: 80,
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