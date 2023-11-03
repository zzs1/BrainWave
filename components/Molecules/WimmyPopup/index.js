import React, { useState } from 'react'

import { StyleSheet, View, Pressable, Dimensions } from 'react-native';
import { Image } from 'expo-image';

import DialogueBoxLower from '../../Atoms/DialogueBoxLower';
import Wimmy from '../../../assets/Illustrations/Wimmy/WimmyFront.png'

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function WimmyPopup({
  title = '',
  desc = '',
  instuction = ''
}) {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      {
        isActive ? <Pressable onPress={() => setIsActive(false)} style={styles.container}>
          <View style={styles.bg}></View>
          <View style={styles.wimmyDialogue}>
            <DialogueBoxLower
              title={title}
              desc={desc}
              instuction={instuction}
            />
            <Image style={{
              width: 270,
              height: 185,
              marginTop: 20
            }} source={Wimmy} />
          </View>
        </Pressable> : <></>
      }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: screenHeight,
    position: 'absolute',
    bottom: 0,
    zIndex: 2
  },
  bg: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'black',
    opacity: 0.6,
    position: 'absolute',
    bottom: 0
  },
  wimmyDialogue: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})