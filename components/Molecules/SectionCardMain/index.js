import React from 'react'

import { StyleSheet, Text, View, Button } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';

import ProgressBar from '../../Atoms/ProgressBar-level';

import { AppContext } from '../../../context/AppContext';

export default function SectionCardMain({
  image = '',
  title = '',
  prog = 0
}) {
  const { isColorBlind } = React.useContext(AppContext);
  const { colors, colorBlindColors } = useTheme();

  return (
    <LinearGradient colors={isColorBlind ? [colorBlindColors.cardBGTwo, colorBlindColors.cardBGOne] : [colors.cardBGTwo, colors.cardBGOne]} style={{
      ...styles.container,
      borderColor: isColorBlind ? colorBlindColors.cardBorder : colors.cardBorder,
      backgroundColor: isColorBlind ? colorBlindColors.cardBGOne : colors.cardBGOne
    }}>
      <Text style={{
        ...styles.title,
        color: colors.text
      }}>{title}</Text>
      <Image source={image} contentFit='contain' style={{
        width: 150,
        height: 150,
      }} />
      <View style={styles.progContainer}>
        <ProgressBar
          fill={prog}
        />
        <Text style={{
          fontSize: 16,
          color: colors.text
        }}>{prog}%</Text>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 230,
    height: 325,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 3
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15
  },
  progContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200,
    marginBottom: 10
  }
})