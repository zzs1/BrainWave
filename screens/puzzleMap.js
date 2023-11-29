import React, { useState } from 'react';

import { StyleSheet, View, Pressable, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';

import LevelIsland from '../components/Molecules/LevelIsland';
import PuzzleMapTitle from '../components/Atoms/PuzzleMapTitle';
import NavBar from '../components/Molecules/NavBar';
import WimmyPopup from '../components/Molecules/WimmyPopup';
import OceanAnimated from '../components/Atoms/OceanAnimated';

import { AppContext } from '../context/AppContext.js'

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function PuzzleMap({ navigation }) {
  const { puzzleType, logicLevel, numberLevel, patternLevel, firstMapVisit, setFirstMapVisit } = React.useContext(AppContext);
  const { colors } = useTheme();

  const [level, setLevel] = useState(puzzleType.toLowerCase() === 'numbers problems' ? numberLevel : puzzleType.toLowerCase() === 'logic problems' ? logicLevel : patternLevel);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gradient}>
        <PuzzleMapTitle title={puzzleType} />
      </View>
      <View style={styles.islandCont}>
        <View style={styles.islandRight}>
          <Pressable onPress={() => level >= 5 ? navigation.push('WordProblemsPage', { currLevel: 5 }) : null}>
            <LevelIsland locked={level < 5 ? true : false} />
          </Pressable>
        </View>
        <View style={styles.islandLeft}>
          <Pressable onPress={() => level >= 4 ? navigation.push('WordProblemsPage', { currLevel: 4 }) : null}>
            <LevelIsland locked={level < 4 ? true : false} />
          </Pressable>
        </View>
        <View style={styles.islandRight}>
          <Pressable onPress={() => level >= 3 ? navigation.push('WordProblemsPage', { currLevel: 3 }) : null}>
            <LevelIsland locked={level < 3 ? true : false} />
          </Pressable>
        </View>
        <View style={styles.islandLeft}>
          <Pressable onPress={() => level >= 2 ? navigation.push('WordProblemsPage', { currLevel: 2 }) : null}>
            <LevelIsland locked={level < 2 ? true : false} />
          </Pressable>
        </View>
        <View style={styles.islandRight}>
          <Pressable onPress={() => {
            setFirstMapVisit(false);
            navigation.push('WordProblemsPage', { currLevel: 1 });
          }}>
            <LevelIsland locked={false} />
          </Pressable>
        </View>
      </View>
      <View style={{zIndex: -999, width: screenWidth, height: screenHeight, overflow: 'hidden', marginTop: 10}}>
        <OceanAnimated />
      </View>
      {
        firstMapVisit ? <WimmyPopup title='WIMMY SAYS...' desc="Let's start solving some puzzles!" instuction='tap to continue' /> : <></>
      }
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: screenWidth,
    height: screenHeight,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0
  },
  islandCont: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 120,
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
  bottomGrad: {
    width: 400,
    height: 500,
    position: 'absolute',
    bottom: 0,
    zIndex: -2
  }
})