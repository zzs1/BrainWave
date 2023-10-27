import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import { useTheme } from '@react-navigation/native'

import AvatarSmall from '../../Atoms/Avatar-small';
import ProgressBar from '../../Atoms/ProgressBar-level';

export default function AccountCard({
    name='',
    level=0,
    prog=0,
    avatarImg=''
}) {
  const { colors } = useTheme(); 

  return (
    <View style={styles.container}>
        <View style={styles.rightSide}>
          <Text style={{
            color: colors.text,
            fontSize: 20,
            fontWeight: '700',
            marginBottom: 20
          }}>{name}</Text>
          <Text style={{
            color: colors.text,
            fontSize: 10,
          }}>Level {level}</Text>
          <ProgressBar 
            fill={prog}
          />
        </View>
        <AvatarSmall 
          image={avatarImg}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 75,
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
})