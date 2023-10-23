import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import PrimaryButton from '../components/Atoms/PrimaryButton';
import NavBar from "../components/Molecules/NavBar";
import * as ImagePicker from 'expo-image-picker';


export default function AccountPageStart(){

    

return(
<>
    <View style={styles.accountStartPageBody}>
        <View>
            <NavBar />
        </View>


            <View style={styles.accountStartTexts} >
                <Image 
                    source={require('../../../assets/accountPages/imageUpload.png')}
                    style={styles.wimmyPic}
                    width={210}
                    height={210}/>
                <Text style={styles.texts}>{userName}</Text>
            </View>


        <View>
            <Text>WIMMY SAYS...</Text>
            <Text>Here is the interface for your account. You can keep track of you progress and make changes here!</Text>
            <Text>Tap to continue.</Text>
        </View>

        <View>
            <Image 
                source={require('../../../assets/accountPages/imageUpload.png')}
                style={styles.wimmyPic}
                width={223}
                height={115}
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
