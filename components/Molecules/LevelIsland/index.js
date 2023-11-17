import React from 'react'
import { StyleSheet, View} from 'react-native';
import { Image } from 'expo-image';
import { useTheme } from '@react-navigation/native';

import Lock from '../../../assets/Illustrations/Lock/Lock_white.png'
import Island from '../../../assets/Illustrations/Island1.png'

import { AppContext } from '../../../context/AppContext'

export default function LevelIsland({
    locked=true,
}) {
  const { isColorBlind } = React.useContext(AppContext);
  const { colors, colorBlindColors } = useTheme();

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
                    backgroundColor: isColorBlind ? colorBlindColors.primaryColor : colors.primaryBtnColor
                }}>
                    <Image source={Lock} contentFit='contain' style={{
                        width: 65,
                        height: 70,
                        marginTop: -5
                    }}/>
                </View>
                <View style={{
                    ...styles.circleShadow,
                    backgroundColor: isColorBlind ? colorBlindColors.primaryColorShadow : colors.primaryBtnShadow
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