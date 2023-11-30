import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { useTheme } from '@react-navigation/native';

import { collection, addDoc, getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from '../../../firebase/firebaseConfig';

import Home from '../../../assets/Icons/home.png'
import Map from '../../../assets/Icons/map.png'
import User from '../../../assets/Icons/user.png'

import Numbers from '../../../assets/Icons/NumberIconBlue.png'
import Logic from '../../../assets/Icons/LampBlue.png'
import Pattern from '../../../assets/Icons/PatternIconBlue.png'

import NumbersBlack from '../../../assets/Icons/NumberIconBlack.png'
import LogicBlack from '../../../assets/Icons/LampBlack.png'
import PatternBlack from '../../../assets/Icons/PatternIconBlack.png'

import NumbersPurple from '../../../assets/Icons/NumberIconPurple.png'
import LogicPurple from '../../../assets/Icons/LampPurple.png'
import PatternPurple from '../../../assets/Icons/PatternIconPurple.png'

import { AppContext } from '../../../context/AppContext';

export default function NavBar({
  navigation,
}) {
  const { isColorBlind, setPuzzleType } = React.useContext(AppContext);
  const { dark, colors, colorBlindColors } = useTheme();

  const sendUser = async () => {
    const userProfile = getAuth();
    if(!userProfile.currentUser) {
      navigation.push("AccountPages")
      return null;
    }

    const docRef = doc(db, "users", userProfile.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document Data: ", docSnap.data());
      navigation.push("AccountProfile")
    } else {
      console.log("No such document!");
    }
}
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={styles.container}>
      {
        isActive ? <View style={{
          ...styles.subNavBarBody,
          backgroundColor: isColorBlind ? colorBlindColors.subNavBG : colors.subNavBG,
        }}>
          <Pressable style={styles.navItem} onPress={() => {
            setPuzzleType('Numbers Problems');
            navigation.push('PuzzleMap');
          }}>
            <Image source={isColorBlind ? (dark ? NumbersBlack : NumbersPurple) : (dark ? NumbersBlack : Numbers)} contentFit='contain' style={{ width: 25, height: 25 }} />
          </Pressable>
          <Pressable style={styles.navItem} onPress={() => {
            setPuzzleType('Logic Problems');
            navigation.push('PuzzleMap');
          }}>
            <Image source={isColorBlind ? (dark ? LogicBlack : LogicPurple) : (dark ? LogicBlack : Logic)} contentFit='contain' style={{ width: 25, height: 25 }} />
          </Pressable>
          <Pressable style={styles.navItem} onPress={() => {
            setPuzzleType('Pattern Recognition');
            navigation.push('PuzzleMap');
          }}>
            <Image source={isColorBlind ? (dark ? PatternBlack : PatternPurple) : (dark ? PatternBlack : Pattern)} contentFit='contain' style={{ width: 25, height: 25 }} />
          </Pressable>
        </View> : <></>
      }
      <View style={{
        ...styles.navBarBody,
        backgroundColor: isColorBlind ? colorBlindColors.navBG : colors.navBG,
      }}>
        <Pressable style={styles.navItem} onPress={() => navigation.push('Home')}>
          <Image source={Home} contentFit='contain' style={{ width: 25, height: 25 }} />
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => setIsActive(!isActive)}>
          <Image source={Map} contentFit='contain' style={{ width: 25, height: 25 }} />
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => sendUser()}>
          <Image source={User} contentFit='contain' style={{ width: 25, height: 25 }} />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: 6,
  },
  navBarBody: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 245,
    height: 60,
    borderRadius: 40,
    position: 'absolute',
    bottom: 6,
    paddingRight: 25,
    paddingLeft: 25,
    // paddingLeft: 20,
    // paddingRight: 20,
    // zIndex: 1
  },
  subNavBarBody: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 200,
    height: 50,
    borderRadius: 40,
    position: 'absolute',
    bottom: 70,
    paddingRight: 25,
    paddingLeft: 25,
    // paddingLeft: 20,
    // paddingRight: 20,
    // zIndex: 1
  },
  navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  navText: {
    fontSize: 16
  }
});