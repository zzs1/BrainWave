import React from 'react';
import { StyleSheet, View, Pressable, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useState, useEffect } from 'react';

import AccountCard from '../components/Molecules/AccountCard';
import SectionCardMain from '../components/Molecules/SectionCardMain';
import SectionCardSide from '../components/Molecules/SectionCardSide';
import CarouselButton from '../components/Atoms/CarouselButton';
import MoveButton from '../components/Atoms/MoveButton';
import NavBar from '../components/Molecules/NavBar';
import TopBar from '../components/Molecules/TopBar/index.js';

import Avatar from '../assets/Icons/Avatar.png'

import { sectionCard } from '../data/sectionCards.js';
import { AppContext } from '../context/AppContext.js';

import WimmyPopup from '../components/Molecules/WimmyPopup';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function HomePage({ navigation }) {
  const { 
    puzzleType, 
    setPuzzleType,
    numberProgress,
    logicProgress,
    patternProgress,
    wimPoints,
  } = React.useContext(AppContext);

  const [data, setData] = useState(sectionCard);
  const [number, setNumber] = useState(0);

  const handleImageOne = (num) => {
    if (num === 0) {
      return 2;
    } else if (num === 1) {
      return 0;
    } else if (num === 2) {
      return 1;
    }
  }

  const handleImageTwo = (num) => {
    if (num === 0) {
      return 1;
    } else if (num === 1) {
      return 2;
    } else if (num === 2) {
      return 0;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopBar navigation={navigation} points={wimPoints}/>
      <View style={styles.cardContainer}>
        <View style={{
          marginRight: -100
        }}>
          <SectionCardSide
            color='#256FB9'
            border='#005AB5'
            theme='dark'
            image={data[handleImageOne(number)].image}
            title={data[handleImageOne(number)].title}
          />
        </View>
        <SectionCardMain
          color='#0C7BDC'
          border='#005AB5'
          theme='dark'
          image={data[number].image}
          title={data[number].title}
          prog= {data[number].title.toLowerCase() === 'numbers problems' ? numberProgress : data[number].title.toLowerCase() === 'logic problems' ? logicProgress : patternProgress}
        />
        <View style={{
          marginLeft: -100,
          zIndex: -1
        }}>
          <SectionCardSide
            color='#256FB9'
            border='#005AB5'
            theme='dark'
            image={data[handleImageTwo(number)].image}
            title={data[handleImageTwo(number)].title}
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <MoveButton
          direction='left'
          onPress={() => setNumber(number === 0 ? data.length - 1 : number - 1)}
        />
        <CarouselButton
          btnText="Let's Go"
          onPress={() => {
            setPuzzleType(data[number].title);
            navigation.push('PuzzleMap');
          }}
        />
        <MoveButton
          direction='right'
          onPress={() => setNumber(number === data.length - 1 ? 0 : number + 1)}
        />
      </View>
      <NavBar color='#0C7BDC' navigation={navigation} />
      <WimmyPopup title='WIMMY SAYS...' desc='Select a puzzle catagory that you want to explore!' instuction='Tap to continue.' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: screenWidth,
    paddingTop: 50
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 340,
    marginTop: 70
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  }
})