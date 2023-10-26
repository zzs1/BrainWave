import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, SafeAreaView } from "react-native";
import PrimaryButton from '../components/Atoms/PrimaryButton';
import NavBar from "../components/Molecules/NavBar";
import * as ImagePicker from 'expo-image-picker';
import WimmyPopup from "../components/Molecules/WimmyPopup"
import ProgressBar from "../components/Atoms/ProgressBar-level"

export default function AccountPageStart({navigation, userName}){

    

return(
<SafeAreaView style={styles.container}>
    <View style={styles.accountStartPageBody}>

            <View style={styles.avarter} >
                <Image 
                    source={require('../assets/Icons/userEdit.png')}
                    style={styles.wimmyPic}
                    width={210}
                    height={210}/>
            </View>


        <View style={styles.userNameSection}>
         <Text style={styles.userName}>{userName}</Text>
            <Image 
                source={require('../assets/Icons/editBlack.png')}
                style={styles.editIcon}
                width={20}
                height={20}
            />
        </View>

                <View style={styles.accountStartTexts} >
                            <Text style={styles.title}>Daily Goal</Text>
                            <Text style={styles.level}>Intermediate</Text>
                             <View style={styles.section}>
                                <Image 
                                    source={require('../assets/Icons/progressBar.png')}
                                    style={styles.wimmyPic}
                            />
                  
                            <Text style={styles.time}>0/15mins</Text>

                             </View>

                            <Text style={styles.message}>Your halfway there to your daily Goal!</Text>
                </View>

            <View style={styles.wimmyTail}>
                 <Image 
                    source={require('../assets/Icons/wimmyTail.png')}
                    />
            </View>
        </View>
        <NavBar color='#005AB5' navigation={navigation}/>
    <WimmyPopup 
            title='WIMMY SAYS...' 
            desc='Here is the interface for your account. You can keep track of you progress and make changes here!' 
            instuction='Tap to continue.'
    />
</SafeAreaView>
        );
}


const styles = StyleSheet.create({
container: {
    margin: 0,
    flex: 1,
},
avarter: {
    alignItems: 'center',
    paddingTop: 40,
},
userName: {
    textDecorationLine: 'underline',
    fontSize: 28,
},
userNameSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
},
editIcon: {
    marginLeft: 10,
},
accountStartTexts: {
    height:250,
    width: 292,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderColor:'#C8C8C8',
    borderWidth: 2,
    backgroundColor: '#F9F9F9',
    marginTop: 80,
    textAlign: 'left',
    paddingTop: 20,
    paddingLeft: 20,

},
accountStartPageBody: {
    alignItems: 'center',
    justifyContent: 'center',
},
wimmyTail: {
    paddingTop: 80,
},
title: {
    fontSize: 24,
    fontWeight: 'bold'
},
level: {
    fontSize: 20,
},
time:{
    fontSize: 16, 
    paddingLeft: 10, 
},
message: {
    fontSize: 20,  
    paddingTop: 20,
    lineHeight: 30,
},
section:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
}
});
