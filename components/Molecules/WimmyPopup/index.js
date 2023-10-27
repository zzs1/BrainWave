import React, { useState } from 'react'

import { StyleSheet, View, Pressable} from 'react-native';
import { Image } from 'expo-image';

import DialogueBoxLower from '../../Atoms/DialogueBoxLower';
import Wimmy from '../../../assets/Illustrations/Wimmy/WimmyFront.png'

export default function WimmyPopup({
    title='',
    desc='',
    instuction=''
}) {
    const [isActive, setIsActive] = useState(true);
  return (
    <Pressable onPress={() => setIsActive(false)} style={styles.container}>
      {
        isActive ? <View>
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
        </View> : <></>
      }
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: 2
  },
  bg: {
    width: 400,
    height: 845,
    backgroundColor: 'black',
    opacity: 0.6,
    marginBottom: -435,
  },
  wimmyDialogue: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
    }
})