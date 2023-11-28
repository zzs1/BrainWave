import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Button, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useState, useEffect } from 'react';
import { useTheme } from '@react-navigation/native';

import { AppContext } from '../context/AppContext.js'

import SettingsSection from '../components/Molecules/SettingSection/index.js';
import NavBar from '../components/Molecules/NavBar/index.js';


import GeneralW from '../assets/Icons/General-white.png'
import GeneralB from '../assets/Icons/General-black.png'

import AccessibilityW from '../assets/Icons/Accessibility-white.png'
import AccessibilityB from '../assets/Icons/Accessibility-black.png'
import TopBar from '../components/Molecules/TopBar/index.js';


export default function Settings({ navigation }) {
  const { isDarkTheme, setIsDarkTheme, isColorBlind, setIsColorBlind, isDyslexic, setIsDyslexic, wimPoints } = React.useContext(AppContext)

  const { dark } = useTheme();
  const { colors } = useTheme();
  const { colorBlindColors } = useTheme();


  return (
    <SafeAreaView style={styles.container}>
      <TopBar navigation={navigation} points={wimPoints}/>
      <View style={styles.settingsSection}>
        <SettingsSection title='Appearance' image={dark ? GeneralW : GeneralB} />
        <View style={styles.settingItem}>
          <Text style={{
            ...styles.settingTitle,
            color: colors.text,
            fontFamily: isDyslexic ? 'Lexend-Regular': 'Poppins-Regular'
          }}>Theme</Text>
          <View style={styles.settingSwitch}>
            <Text style={{
              color: colors.text,
              fontFamily: isDyslexic ? 'Lexend-Regular': 'Poppins-Regular'
            }}>Light</Text>
            <Switch
              trackColor={{ false: colors.switchBG, true: colors.switchBG }}
              thumbColor={ isColorBlind ? colorBlindColors.switchThumb : colors.switchThumb }
              onValueChange={() => setIsDarkTheme(current => !current)}
              value={isDarkTheme}
            />
            <Text style={{
              color: colors.text,
              fontFamily: isDyslexic ? 'Lexend-Regular': 'Poppins-Regular'
            }}>Dark</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.settingsSection}>
        <SettingsSection title='Accessibility' image={dark ? AccessibilityW : AccessibilityB} />
        <View style={styles.settingItem}>
          <Text style={{
            ...styles.settingTitle,
            color: colors.text,
            fontFamily: isDyslexic ? 'Lexend-Regular': 'Poppins-Regular'
          }}>Screen Reader</Text>
          <View style={styles.settingSwitch}>
            <Text style={{
              color: colors.text,
              fontFamily: isDyslexic ? 'Lexend-Regular': 'Poppins-Regular'
            }}>Off</Text>
            <Switch
              trackColor={{ false: colors.switchBG, true: colors.switchBG }}
              thumbColor={ isColorBlind ? colorBlindColors.switchThumb : colors.switchThumb }
            />
            <Text style={{
              color: colors.text,
              fontFamily: isDyslexic ? 'Lexend-Regular': 'Poppins-Regular'
            }}>On</Text>
          </View>
        </View>

        <View style={styles.settingItem}>
          <Text style={{
            ...styles.settingTitle,
            color: colors.text,
            fontFamily: isDyslexic ? 'Lexend-Regular': 'Poppins-Regular'
          }}>Color Blind Mode</Text>
          <View style={styles.settingSwitch}>
            <Text style={{
              color: colors.text,
              fontFamily: isDyslexic ? 'Lexend-Regular': 'Poppins-Regular'
            }}>Off</Text>
            <Switch
              trackColor={{ false: colors.switchBG, true: colors.switchBG }}
              thumbColor={ isColorBlind ? colorBlindColors.switchThumb : colors.switchThumb }
              onValueChange={() => setIsColorBlind(current => !current)}
              value={isColorBlind}
              onToggle={WimmySpeak}
            />
            <Text style={{
              color: colors.text,
              fontFamily: isDyslexic ? 'Lexend-Regular': 'Poppins-Regular'
            }}>On</Text>
          </View>
        </View>

        <View style={styles.settingItem}>
          <Text style={{
            ...styles.settingTitle,
            color: colors.text,
            fontFamily: isDyslexic ? 'Lexend-Regular': 'Poppins-Regular'
          }}>Dyslexia Font</Text>
          <View style={styles.settingSwitch}>
            <Text style={{
              color: colors.text,
              fontFamily: isDyslexic ? 'Lexend-Regular': 'Poppins-Regular'
            }}>Off</Text>
            <Switch
              trackColor={{ false: colors.switchBG, true: colors.switchBG }}
              thumbColor={ isColorBlind ? colorBlindColors.switchThumb : colors.switchThumb }
              onValueChange={() => setIsDyslexic(current => !current)}
              value={isDyslexic}
            />
            <Text style={{
              color: colors.text,
              fontFamily: isDyslexic ? 'Lexend-Regular': 'Poppins-Regular'
            }}>On</Text>
          </View>
        </View>
      </View>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingTop: 50
  },
  settingsSection: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 50
  },
  settingItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 270,
  },
  settingSwitch: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100
  },
  settingTitle: {
    fontSize: 16
  }
})