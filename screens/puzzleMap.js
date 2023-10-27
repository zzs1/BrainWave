import React from 'react';
import { StyleSheet, View, Pressable, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';

import LevelIsland from '../components/Molecules/LevelIsland';
import PuzzleMapTitle from '../components/Atoms/PuzzleMapTitle';
import NavBar from '../components/Molecules/NavBar';
import WimmyPopup from '../components/Molecules/WimmyPopup';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function PuzzleMap({ navigation }) {
  const route = useRoute();
  const title = route.params.title;

  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <WimmyPopup title='WIMMY SAYS...' desc="Let's start solving some puzzles!" instuction='tap to continue' />
      <View style={styles.gradient}>
        <PuzzleMapTitle title={title} />
      </View>
      <View style={styles.islandCont}>
        <View style={styles.islandRight}>
          <LevelIsland locked={true} />
        </View>
        <View style={styles.islandLeft}>
          <LevelIsland locked={true} />
        </View>
        <View style={styles.islandRight}>
          <LevelIsland locked={true} />
        </View>
        <View style={styles.islandLeft}>
          <LevelIsland locked={true} />
        </View>
        <View style={styles.islandRight}>
          <Pressable onPress={() => navigation.push('WordProblems')}>
            <LevelIsland locked={false} />
          </Pressable>
        </View>
      </View>
      <LinearGradient colors={['transparent', colors.primaryBtnColor]} style={styles.bottomGrad}></LinearGradient>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: screenWidth,
    height: screenHeight
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
  bottomGrad: {
    width: 400,
    height: 500,
    position: 'absolute',
    bottom: 0,
    zIndex: -2
  }
})