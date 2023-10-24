import React from 'react'
import { StyleSheet, Text, View, Button, Pressable} from 'react-native';
import { Image } from 'expo-image';

import Home from '../../../assets/Icons/home.png'
import Settings from '../../../assets/Icons/setting.png'
import Map from '../../../assets/Icons/map.png'
import User from '../../../assets/Icons/user.png'

export default function NavBar({
  navigation,
    color=''
}) {
  return (
    <View style={{
      ...styles.navBarBody,
      backgroundColor: color
    }} >
      <Pressable onPress={() => navigation.push('Home')}>
        <View style={styles.navItem}>
          <Image source={Home} contentFit='contain' style={{
            width: 30,
            height: 30
          }}/>
          <Text style={styles.navText}>Home</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => navigation.push('Home')}>
        <View style={styles.navItem}>
          <Image source={Map} contentFit='contain' style={{
            width: 30,
            height: 30
          }}/>
          <Text style={styles.navText}>Performance</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => navigation.push('AccountStartPage')}>
        <View style={styles.navItem}>
          <Image source={User} contentFit='contain' style={{
            width: 30,
            height: 30
          }}/>
          <Text style={styles.navText}>Account</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => navigation.push('Home')}>
        <View style={styles.navItem}>
          <Image source={Settings} contentFit='contain' style={{
            width: 30,
            height: 30
          }}/>
          <Text style={styles.navText}>Settings</Text>
        </View>
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
    width: 400,
    height: 70,
    borderRadius: 15,
    borderBottomLeftRadius:0,
    borderBottomRightRadius: 0,
    position: 'absolute',
    bottom: 0,
    paddingLeft: 20,
    paddingRight: 20

   },
   navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
   },
  navText: {
    color: 'white',
    fontSize: 16
  }
});
