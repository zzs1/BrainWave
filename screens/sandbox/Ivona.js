import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import Dialogue from '../../components/DialogueBox';
import Logo from '../../components/Logo';
import InputBox from '../../components/InputBox';
import DialogueBoxLower from '../../components/DialogueBoxLower';
import DialogueBoxUpper from '../../components/DialogueBoxUpper';
import QuestionBox from '../../components/QuestionBox';
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