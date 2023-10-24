import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import InNav from './screens/InNav';
import AccessibilityPrompt from './screens/AccessibilityPrompt';
import Intro from './screens/Intro';
import AccountStartPage from './screens/AccountStartPage';
import AccountStartName from './screens/AccountStartName';
import AccountStartAvater from './screens/AccountStartAvater';
import AccountStartTime from './screens/AccountStartTime';
import AccountStartTime2 from './screens/AccountStartTime2';

import HomePage from './screens/homePage';
import PuzzleMap from './screens/puzzleMap';
import WordProblem from './screens/wordProblems';
import WordProblemTwo from './screens/wordProblemTwo';
import WordProblemThree from './screens/wordProblemThree';
import WordProblemFour from './screens/wordProblemFour';
import Feedback from './screens/Feedback';

import AccountInterfaceStart from './screens/AccountInterfaceStart';

import AccessibilityPromptSecond from './screens/AccessibilityPromptSecond';


export default function App() {
  const Stack = createNativeStackNavigator();
  var colorScheme = useColorScheme();
  
  useEffect(() => {
    console.log(colorScheme);
  }, [colorScheme])

  return (
    <SafeAreaView style={{...styles.container,backgroundColor: colorScheme === 'light' ? '#FFFFFFc': '#584b9d'}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Landing'>
          <Stack.Screen name='Landing' component={InNav} options={{headerShown: false}}/>
          <Stack.Screen name='AccessibilityPrompt' component={AccessibilityPrompt} options={{headerShown: false}}/>
          <Stack.Screen name="Intro" component={Intro} options={{headerShown: false}}/>
          <Stack.Screen name='Home' component={HomePage} options={{headerShown: false}}/>
          <Stack.Screen name='PuzzleMap' component={PuzzleMap} options={{headerShown: false}}/>
          <Stack.Screen name='AccountStartPage' component={AccountStartPage} options={{headerShown: false}}/>
          <Stack.Screen name='AccountStartName' component={AccountStartName} options={{headerShown: false}}/>
          <Stack.Screen name='AccountStartAvater' component={AccountStartAvater} options={{headerShown: false}}/>
          <Stack.Screen name='AccountStartTime' component={AccountStartTime} options={{headerShown: false}}/>
          <Stack.Screen name='AccountStartTime2' component={AccountStartTime2} options={{headerShown: false}}/>


          <Stack.Screen name='WordProblems' component={WordProblem} options={{headerShown: false}}/>
          <Stack.Screen name='WordProblemTwo' component={WordProblemTwo} options={{headerShown: false}}/>
          <Stack.Screen name='WordProblemThree' component={WordProblemThree} options={{headerShown: false}}/>
          <Stack.Screen name='WordProblemFour' component={WordProblemFour} options={{headerShown: false}}/>

          <Stack.Screen name='Feedback' component={Feedback} options={{headerShown: false}}/>

          <Stack.Screen name='AccountInterfaceStart' component={AccountInterfaceStart} options={{headerShown: false}}/>
          

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  lightContainer: {
    backgroundColor: '#FFFFFF',
  },
  darkContainer: {
    backgroundColor: '#584b9d',
  },
  lightThemeText: {
    color: '#FFFFFF',
  },
  darkThemeText: {
    color: '#FFFFFF',
  }
});
