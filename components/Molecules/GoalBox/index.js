import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import { useTheme } from '@react-navigation/native';

import ProgressBar from '../../Atoms/ProgressBar-small';

export default function GoalBox({
  prog=0,
  time='',
  goal='',
  level='',
}) {
  const { colors } = useTheme();

  return (
    <View style={{
      ...styles.container,
      backgroundColor: colors.dialogueBG,
      borderColor: colors.dialogueBorder
    }}>
        <Text style={{
          fontSize: 20,
          fontWeight: '900',
          color: colors.text,
          position: 'absolute',
          left: 10,
          top: 10,
        }}>Daily Goal</Text>
        <Text style={{
          fontSize: 16,
          color: colors.text,
          paddingTop: 20,
        }}>{level}</Text>
        <View style={styles.progContainer}>
          <ProgressBar fill={prog}/>
          <Text style={{
            fontSize: 14,
            color: colors.text
          }}>{time}/{goal} mins</Text>
        </View>
        {/* <Text style={{
          fontSize: 10,
          color: colors.text,
        }}>{prog <= 50 ? "You're less than halfway there to your daily goal!" : "You're more than halfway there to you daily goal!"}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    width: 160,
    height: 140,
    borderWidth: 3
  },

  progContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: 5
  }
})