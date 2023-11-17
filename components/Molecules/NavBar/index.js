import React from 'react'
import { StyleSheet, Text, View, Button, Pressable} from 'react-native';
import { Image } from 'expo-image';
import { useTheme } from '@react-navigation/native';

import Home from '../../../assets/Icons/home.png'
import Map from '../../../assets/Icons/map.png'
import User from '../../../assets/Icons/user.png'
import Chat from '../../../assets/Icons/chatIcon.png'

import { AppContext } from '../../../context/AppContext';

export default function NavBar({
  navigation,
}) {
  const { isColorBlind } = React.useContext(AppContext);
  const { colors, colorBlindColors } = useTheme();

  return (
   <View style={{
    ...styles.navBarBody,
    backgroundColor: isColorBlind ? colorBlindColors.navBG : colors.navBG,
   }}>
    <Pressable style={styles.navItem} onPress={() => navigation.push('Home')}>
      <Image source={Home} contentFit='contain' style={{width: 25, height: 25}}/>
      {/* <Text style={{
        ...styles.navText,
        color: colors.navText
      }}>Home</Text> */}
    </Pressable>
    <Pressable style={styles.navItem} onPress={() => navigation.push('Home')}>
      <Image source={Map} contentFit='contain' style={{width: 25, height: 25}}/>
      {/* <Text style={{
        ...styles.navText,
        color: colors.navText
      }}>Progression</Text> */}
    </Pressable>
    <Pressable style={styles.navItem} onPress={() => navigation.push('AccountPages')}>
      <Image source={User} contentFit='contain' style={{width: 25, height: 25}}/>
      {/* <Text style={{
        ...styles.navText,cha
        color: colors.navText
      }}>Account</Text> */}
    </Pressable>
    <Pressable style={styles.navItem} onPress={() => navigation.push('Settings')}>
      <Image source={Chat} contentFit='contain' style={{width: 25, height: 25}}/>
      {/* <Text style={{
        ...styles.navText,
        color: colors.navText
      }}>Settings</Text> */}
    </Pressable>
   </View>
  )
}

const styles = StyleSheet.create({
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
   navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
   },
  navText: {
    fontSize: 16
  }
});