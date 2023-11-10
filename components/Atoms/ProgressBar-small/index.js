import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function ProgressBar({
    fill=0,
}) {
  const { colors } = useTheme();

  return (
    <View style={{
      ...styles.container,
      backgroundColor: colors.progBarBG
    }}>
        <View style={{
            width:`${fill}%`,
            height:'100%',
            backgroundColor: colors.progBarFill,
            borderRadius: 10
        }}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: 120,
    borderRadius: 10
  }
})