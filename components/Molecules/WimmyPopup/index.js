import React, { useState } from 'react'

import { StyleSheet, View, Pressable, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import axios from 'axios';

import DialogueBoxLower from '../../Atoms/DialogueBoxLower';
import Wimmy from '../../../assets/Illustrations/Wimmy/WimmyFront.png'

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function WimmyPopup({
  title = '',
  desc = '',
  instuction = ''
}) {
  const API_KEY = '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';
  const API_URL = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

  const [data, setData] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [isActive, setIsActive] = useState(true);

  const handleSend = async () =>{
    const prompt = textInput;
    const response = await axios.post(API_URL, {
      prompt: prompt,
      max_tokens: 1024,
      temperature: 0.5
    }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      }
    });
    const text = response.data.choices[0].text;
    setData([...data, {type: 'user', 'text': textInput}, {type: 'bot', 'text': text}]);
    setTextInput('');
  }
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
    height: 1000,
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