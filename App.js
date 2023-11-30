import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { StyleSheet, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

import InNav from './screens/InNav';
import AccessibilityPrompt from './screens/AccessibilityPrompt';
import Intro from './screens/Intro';
import AccountPages from './screens/AccountPages';
import AccountProfile from './screens/AccountProfile.js';
import HomePage from './screens/homePage';
import PuzzleMap from './screens/puzzleMap';
import WordProblemsPage from './screens/wordProblemsPages';
import Feedback from './screens/Feedback';
import Settings from './screens/settings';
import WimmyCostume from './screens/wimmyCostume.js';

import DarkTheme from './theme/DarkTheme';
import DefaultTheme from './theme/DefaultTheme';

import { AppContext } from './context/AppContext.js'


const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

SplashScreen.preventAutoHideAsync();

export default function App() {
  const Stack = createNativeStackNavigator();

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isColorBlind, setIsColorBlind] = useState(false);
  const [isDyslexic, setIsDyslexic] = useState(false);
  const [puzzleType, setPuzzleType] = useState('');
  const [logicLevel, setLogicLevel] = useState(1);
  const [numberLevel, setNumberLevel] = useState(1);
  const [patternLevel, setPatternLevel] = useState(1);
  const [numberProgress, setNumberProgress] = useState(0);
  const [logicProgress, setLogicProgress] = useState(0);
  const [patternProgress, setPatternProgress] = useState(0);
  const [wimPoints, setWimPoints] = useState(0);
  const [userName, setUserName] = useState("");
  const [firstHomeVisit, setFirstHomeVisit] = useState(true);
  const [firstMapVisit, setFirstMapVisit] = useState(true);
  const [pfp, setPfp] = useState("");

  const appContext = useMemo(() => {
    return {
      isDarkTheme, setIsDarkTheme,
      isColorBlind, setIsColorBlind,
      puzzleType, setPuzzleType,
      wimPoints, setWimPoints,
      logicLevel, setLogicLevel,
      numberLevel, setNumberLevel,
      patternLevel, setPatternLevel,
      numberProgress, setNumberProgress,
      logicProgress, setLogicProgress,
      patternProgress, setPatternProgress,
      isDyslexic, setIsDyslexic,
      accountSet, setAccountSet,
      firstHomeVisit, setFirstHomeVisit,
      firstMapVisit, setFirstMapVisit,
      email, setEmail,
      password, setPassword,
      userName, setUserName,
      pfp, setPfp
    }
  });

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/Fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/Fonts/Poppins-Bold.ttf'),
    'Lexend-Regular' : require('./assets/Fonts/Lexend-Regular.ttf'),
    'Lexend-Bold': require('./assets/Fonts/Lexend-Bold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if(!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style={isDarkTheme ? 'light' : 'dark'}/>
      <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
        <AppContext.Provider value={appContext}>
          <Stack.Navigator initialRouteName='Landing'>
              <Stack.Screen name='Landing' component={InNav} options={{headerShown: false}}/>
              <Stack.Screen name='AccessibilityPrompt' component={AccessibilityPrompt} options={{headerShown: false}}/>
              <Stack.Screen name="Intro" component={Intro} options={{headerShown: false}}/>
              <Stack.Screen name='Home' component={HomePage} options={{headerShown: false}}/>
              <Stack.Screen name='PuzzleMap' component={PuzzleMap} options={{headerShown: false}}/>              
              <Stack.Screen name='AccountPages' component={AccountPages} options={{headerShown: false}}/>
              <Stack.Screen name='AccountProfile' component={AccountProfile} options={{headerShown: false}}/>
              <Stack.Screen name='WordProblemsPage' component={WordProblemsPage} options={{headerShown: false}}/>
              <Stack.Screen name='Feedback' component={Feedback} options={{headerShown: false}}/>
              <Stack.Screen name='Settings' component={Settings} options={{headerShown: false}}/>
              <Stack.Screen name='WimmyCostume' component={WimmyCostume} options={{headerShown: false}}/>
          </Stack.Navigator>
        </AppContext.Provider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    fontFamily: 'Poppins-Regular'
  }
});
