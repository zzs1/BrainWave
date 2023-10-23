import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';

import AvatarSmall from '../../Atoms/Avatar-small';
import ProgressBar from '../../Atoms/ProgressBar-level';

export default function AccountCard({
    name='',
    level=0,
    fontColor='',
    prog=0,
    theme = '',
    avatarImg=''
}) {
  return (
    <View style={styles.container}>
        <View style={styles.rightSide}>
          <Text style={{
            color: fontColor,
            fontSize: 20,
            fontWeight: '700',
            marginBottom: 20
          }}>{name}</Text>
          <Text style={{
            color: fontColor,
            fontSize: 10,
          }}>Level {level}</Text>
          <ProgressBar 
            fill={prog}
            theme={theme}
            color={fontColor}
          />
        </View>
        <AvatarSmall 
          frameColor={fontColor}
          image={avatarImg}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 75,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
})