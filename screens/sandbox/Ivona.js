import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import Logo from '../../components/Atoms/Logo';
import InputBox from '../../components/Atoms/InputBox';
import DialogueBoxLower from '../../components/Atoms/DialogueBoxLower';
import DialogueBoxUpper from '../../components/Atoms/DialogueBoxUpper';
import QuestionBox from '../../components/Atoms/QuestionBox';
import LevelLock from '../../components/Molecules/LevelLock';
import SubjectBox from '../../components/Atoms/SubjectBox';
import DialogueBar from '../../components/Atoms/DialogueBar';

export default function Ivona() {

  
    return (
      <SafeAreaView style={styles.container}>
       
        <Logo/>
        <DialogueBoxLower/>
        <DialogueBoxUpper/>
        <QuestionBox/>
        <InputBox/>
        <LevelLock/>
        <DialogueBar/>
        
      </SafeAreaView>  
    );
  }
  const styles = StyleSheet.create({
    container:{
      display:'flex',
      flexDirection: 'column',
      gap: 15
        

    }
})