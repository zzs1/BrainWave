import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import InNav from './screens/InNav';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  var colorScheme = useColorScheme();
  
  useEffect(() => {
    console.log(colorScheme);
  }, [colorScheme])

  return (
    <SafeAreaView style={{...styles.container,backgroundColor: colorScheme === 'light' ? '#FFFFFFc': '#584b9d'}}>
      <View>
        <Text style={styles.lightThemeText}>
          <InNav/>
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
    height: '100%',
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
