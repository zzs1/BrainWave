import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import ProgressBar from '../../Atoms/ProgressBar-level';

export default function GoalBox({
  color='',
  prog=0,
  time='',
  goal='',
  level='',
  theme=''
}) {
  return (
    <View style={styles.container}>
        <Text style={{
          ...styles.header,
          color: color
        }}>Daily Goal</Text>
        <Text style={{
          fontSize: 20,
          color: color
        }}>{level}</Text>
        <View style={styles.progContainer}>
          <ProgressBar fill={prog} color={color} theme={theme}/>
          <Text style={{
            fontSize: 16,
            color: color
          }}>{time}/{goal} mins</Text>
        </View>
        <Text style={{
          fontSize: 20,
          color: color,
        }}>{prog <= 50 ? "You're less than halfway there to your daily goal!" : "You're more than halfway there to you daily goal!"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 15,
    borderBottomLeftRadius: 0
  },
  header: {
    fontSize: 24,
    fontWeight: '900',
  },
  progContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})