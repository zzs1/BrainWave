import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { useTheme } from '@react-navigation/native'

export default function SettingsSection({
    title='',
    image=''
}) {
  const { colors } = useTheme(); 

  return (
    <View style={styles.container}>
        <View style={styles.titleSection}>
            <Image source={image} style={{
                width: 20,
                height: 20,
                objectFit: 'fill'
            }}/>
            <Text style={{
                ...styles.title,
                color: colors.text
            }}>{title}</Text>
        </View>
        <Text style={{
            color: colors.fadedText,
            fontWeight: 'bold'
        }}>___________________________________________</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 280
  },
  titleSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 15
  }
})