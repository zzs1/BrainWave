import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import { Image } from 'expo-image';

import Lock from '../../../assets/Illustrations/Lock/Lock_white.png'
import Island from '../../../assets/Illustrations/Island1.png'

export default function LevelIsland({
    color='',
    shadow='',
    locked=true,
}) {
  return (
    <View style={styles.container}>
        <Image source={Island} contentFit='contain' style={{
            width: 200,
            height: 130,
            zIndex: 0
        }}/>

        {
            locked ? <View style={{
                marginTop: -130
            }}>
                <View style={{
                    ...styles.circle,
                    backgroundColor: color
                }}>
                    <Image source={Lock} contentFit='contain' style={{
                        width: 65,
                        height: 70,
                        marginTop: -5
                    }}/>
                </View>
                <View style={{
                    ...styles.circleShadow,
                    backgroundColor: shadow
                }}></View>
                <View style={styles.circleShadow}></View>
            </View>: <></>
        }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  circle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
    height: 110,
    borderRadius: 100,
    zIndex: 2
  },
  circleShadow: {
    width: 110,
    height: 110,
    borderRadius: 100,
    marginTop: -105,
    zIndex: 1
  }
})