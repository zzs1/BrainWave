import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, useMemo } from 'react';
import { StyleSheet, Dimensions} from 'react-native';
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
// import WordProblem from './screens/wordProblems';
// import WordProblemTwo from './screens/wordProblemTwo';
// import WordProblemThree from './screens/wordProblemThree';
// import WordProblemFour from './screens/wordProblemFour';
import WordProblemsPage from './screens/wordProblemsPages';
import Feedback from './screens/Feedback';
import AccountInterfaceStart from './screens/AccountInterfaceStart';
import Settings from './screens/settings';

import DarkTheme from './theme/DarkTheme';
import DefaultTheme from './theme/DefaultTheme';

import { AppContext } from './context/AppContext.js'

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function App() {
  const Stack = createNativeStackNavigator();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const appContext = useMemo(() => {
    return {
      isDarkTheme,
      setIsDarkTheme
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={isDarkTheme ? 'light' : 'dark'}/>
      <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
        <AppContext.Provider value={appContext}>
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
              <Stack.Screen name='AccountInterfaceStart' component={AccountInterfaceStart} options={{headerShown: false}}/>


              <Stack.Screen name='WordProblemsPage' component={WordProblemsPage} options={{headerShown: false}}/>
              {/* <Stack.Screen name='WordProblems' component={WordProblem} options={{headerShown: false}}/>
              <Stack.Screen name='WordProblemTwo' component={WordProblemTwo} options={{headerShown: false}}/>
              <Stack.Screen name='WordProblemThree' component={WordProblemThree} options={{headerShown: false}}/>
              <Stack.Screen name='WordProblemFour' component={WordProblemFour} options={{headerShown: false}}/> */}
              

              <Stack.Screen name='Feedback' component={Feedback} options={{headerShown: false}}/>

              <Stack.Screen name='Settings' component={Settings}/>
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
    height: screenHeight
  }
});
