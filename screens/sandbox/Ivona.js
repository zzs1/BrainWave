import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import Dialogue from '../components/Atoms/DialogueBox';
import Logo from '../components/Atoms//Logo';
import InputBox from '../components/Atoms//InputBox';
import DialogueBoxLower from '../components/Atoms//DialogueBoxLower';
import DialogueBoxUpper from '../components/Atoms//DialogueBoxUpper';
import QuestionBox from '../components/Atoms//QuestionBox';
export default function Ivona() {

  
    return (
      <SafeAreaView>
        <View>
            <Dialogue num={5} step={3}/>
    
        </View>
        <Logo/>
        <DialogueBoxLower/>
        <DialogueBoxUpper/>
        <QuestionBox/>
        <InputBox/>
      </SafeAreaView>  
    );
  }