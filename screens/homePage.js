import React from 'react';
import { StyleSheet, View, Pressable, Dimensions, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@react-navigation/native';
import { useState, useEffect } from 'react';

import { collection, addDoc, getFirestore, setDoc, doc,getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from '../firebase/firebaseConfig.js';

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
    firstHomeVisit,
    setFirstHomeVisit,
    userName, setUserName,
    pfp, setPfp,
    numberProgress, setNumberProgress,
    logicProgress, setLogicProgress,
    patternProgress, setPatternProgress,
    logicLevel, setLogicLevel,
    numberLevel, setNumberLevel,
    patternLevel, setPatternLevel,
    wimPoints, setWimPoints,
    isDyslexic
  } = React.useContext(AppContext);

  const { colors } = useTheme();

  const getUser = async () => {
    const userProfile = getAuth();
    if(!userProfile.currentUser) {
      return null;
    }

    const docRef = doc(db, "users", userProfile.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document Data: ", docSnap.data());
      const user = docSnap.data();
      setUserName(user.userName);
      setPfp(user.avatar);
      setWimPoints(user.wimPoints);
      setNumberProgress(user.numberProg);
      setLogicProgress(user.logicProg);
      setPatternProgress(user.patternProg);
      setLogicLevel(user.logicLvl);
      setNumberLevel(user.numberLvl);
      setPatternLevel(user.patternLvl);
    } else {
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getUser();
  }, [])

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
      <TopBar navigation={navigation} points={wimPoints} />
      {
        userName && <Text style={{
          fontSize: 20,
          fontFamily: isDyslexic ? 'Lexend-Bold' : 'Poppins-Bold',
          color: colors.text,
          marginTop: 30,
        }}>Welcome, {userName}</Text>
      }
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
          prog={data[number].title.toLowerCase() === 'numbers problems' ? numberProgress : data[number].title.toLowerCase() === 'logic problems' ? logicProgress : data[number].title.toLowerCase() === 'pattern recognition' ? patternProgress : null}
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
            setFirstHomeVisit(false);
            navigation.push('PuzzleMap');
          }}
        />
        <MoveButton
          direction='right'
          onPress={() => setNumber(number === data.length - 1 ? 0 : number + 1)}
        />
      </View>
      <NavBar color='#0C7BDC' navigation={navigation} />
      {
        firstHomeVisit ? <WimmyPopup title='WIMMY SAYS...' desc='Select a puzzle catagory that you want to explore!' instuction='Tap to continue.' /> : <></>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: screenWidth,
    height: screenHeight,
    paddingTop: 50,
    paddingBottom: 120
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