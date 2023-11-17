import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import { useTheme } from '@react-navigation/native';

import { AppContext } from '../../../context/AppContext'

export default function ProgressBar({
    fill=0,
}) {
  const { isColorBlind } = React.useContext(AppContext);
  const { colors, colorBlindColors } = useTheme();

  return (
    <View style={{
      ...styles.container,
      backgroundColor: isColorBlind ? colorBlindColors.progBarBG : colors.progBarBG
    }}>
        <View style={{
            width:`${fill}%`,
            height:'100%',
            backgroundColor: isColorBlind ? colorBlindColors.progBarFill : colors.progBarFill,
            borderRadius: 10
        }}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: 150,
    borderRadius: 10
  }
})