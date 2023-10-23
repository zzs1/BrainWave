import React from 'react'

import { StyleSheet, Text, View, Button} from 'react-native';
import { Image } from 'expo-image';

import ProgressBar from '../../Atoms/ProgressBar-level';

export default function SectionCardMain({
    color='',
    border='',
    theme='',
    image='',
    title='',
    prog=0
}) {
  return (
    <View style={{
      ...styles.container,
      border: `3px solid ${border}`, 
      backgroundColor: theme === 'dark' ? color : `linear-gradient(white, ${color})`,
    }}>
        <Text style={{
          ...styles.title,
          color: theme === 'dark' ? 'white' : '#1E1E1E'
        }}>{title}</Text>
        <Image source={image} contentFit='contain' style={{
          width: 150,
          height: 150,
        }}/>
        <View style={styles.progContainer}>
          <ProgressBar 
            fill={prog}
            color={border}
            theme={theme}
          />
          <Text style={{
            fontSize: 16,
            color: theme === 'dark' ? '#CDDDEC' : '#343434'
          }}>{prog}%</Text>
        </View>
    </View>
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
    borderRadius: 10
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