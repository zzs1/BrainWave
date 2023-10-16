import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import About from './screens/About';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  var colorScheme = useColorScheme();

  useEffect(() => {
    console.log(colorScheme);
  }, [colorScheme])

  return (
    <SafeAreaView style={{...styles.container,backgroundColor: colorScheme === 'light' ? '#0c7bdc': '#584b9d'}}>
      <View>
        <Text style={styles.lightThemeText}>
          <About/>
        </Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  lightContainer: {
    backgroundColor: '#0c7bdc',
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
