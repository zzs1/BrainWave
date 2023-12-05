import React, { useEffect, useState } from 'react'

import { StyleSheet, View, Pressable, Dimensions } from 'react-native';
import { Image } from 'expo-image';

import DialogueBoxLower from '../../Atoms/DialogueBoxLower';
import Wimmy from '../../../assets/Illustrations/Wimmy/WimmyFront.png';
import Splash from '../../../assets/Illustrations/Splash.png';
import WimmyAnimated from '../../Atoms/WimmyAnimated';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function WimmyPopup({
  title = '',
  desc = '',
  instuction = '',
  active = true,
  onPress = () => { },
  loading = false
}) {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setIsActive(active);
  }, [active])

  return (
    <>
      {
        isActive ? <View style={styles.container}>
          <Pressable onPress={() => {
            onPress();
            setIsActive(false)
          }} style={styles.bg}></Pressable>
          <View style={styles.wimmyDialogue}>
            <DialogueBoxLower
              title={title}
              desc={desc}
              instuction={instuction}
              loading={loading}
            />
            <Pressable onPress={() => {
              onPress();
              setIsActive(false)
            }}>
              <WimmyAnimated />
            </Pressable>
            <Image source={Splash} style={{ width: 400, height: 200, position: 'absolute', zIndex: -1, bottom: -125}} />
          </View>
        </View> : <></>
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
    zIndex: 2,
    paddingBottom: 30
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