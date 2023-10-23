import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import PrimaryButton from '../components/Atoms/PrimaryButton';


export default function AccountPageStart(){

    function timeMode(){
        console.log(mode);
    }


return(
<>
    <View style={styles.accountStartPageBody}>
        <View>
            <Image
            source={require('../../../assets/Icons/wimmy.png')}
            style={styles.wimmyPic}
            width={270}
            height={188}/>
        </View>


            <View style={styles.accountStartTexts} >
                <Text style={styles.title}>Let’s set some goals!</Text>
                <Text style={styles.texts}>How long would you like to practice in a day?</Text>
            </View>


        <View style={styles.accountStartButton}>
            <PrimaryButton
                primaryButtonText="Beginner(5mins/day)"
                style={styles.buttonTexts}
                onPress={[timeMode, ()=> navigation.push('AccountStartTime2')]}
                value={mode}
            />

            <PrimaryButton
                primaryButtonText="Intermediate(10mins/day)"
                style={styles.buttonTexts}
                onPress={[timeMode, ()=> navigation.push('AccountStartTime2')]}
                value={mode}
            />

            <PrimaryButton
                primaryButtonText="Advanced(20mins/day)"
                style={styles.buttonTexts}
                onPress={[timeMode, ()=> navigation.push('AccountStartTime2')]}
                value={mode}
            />
        </View>


        </View>
        </>
        );
}


const styles = StyleSheet.create({
title: {
    fontSize: 22,
    fontWeight: 'bold',
},
texts: {
    fontSize: 20,
},
accountStartTexts: {
    height:183,
    width: 292,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderColor:'#C8C8C8',
    borderWidth: 2,
    backgroundColor: '#F9F9F9'
},
accountStartPageBody: {
    display:'flex',
    flexDirection: 'column'
},
buttonTexts: {
    fontSize: 22,
    fontWeight: 'bold',
}
});
