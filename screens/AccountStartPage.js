import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import PrimaryButton from '../components/Atoms/PrimaryButton';


export default function AccountPageStart(){


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
                            <Text style={styles.title}>Let’s set up your account!</Text>
                            <Text style={styles.texts}>An account will allow you to track your progress and share with friends!</Text>
                        </View>


                    <View style={styles.accountStartButton}>
                        <PrimaryButton
                        primaryButtonText="START"
                        onPress={() => navigation.push('AccountStartName')}
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
height:235,
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
accountStartButton: {
marginTop: 100,
}
});
