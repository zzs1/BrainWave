import { StyleSheet, Text, View, Image, Pressable, TextInput, Dimensions, ScrollView, Button } from "react-native";
import React from "react";

import TopBar from "../components/Molecules/TopBar";
import { AppContext } from '../context/AppContext.js';
import NavBar from "../components/Molecules/NavBar";
import ModalComp from "../components/Molecules/Modal/index.js";


const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


export default function WimmyCostume({ navigation, points=0 }){
    const { wimPoints, isDyslexic } = React.useContext(AppContext);

    return(
        <>

<TopBar navigation={navigation} points={wimPoints} />
    
    <View style={styles.wimmyPic}>
        <Image 
            source={require('../assets/Icons/wimmyShadow.png')}
            width={270}
            height={188} 
        />


  
    <Text style={{
        fontSize: 20,
        fontFamily: isDyslexic ? 'Lexend-Bold': 'Poppins-Bold'
    }}>You have {wimPoints} wims</Text> 


<View style={styles.costumes}>

    <Pressable  
        style={styles.costume}
        onPress={() => handleCostumeClick(require('../assets/Icons/wimmyCostume1.png'))}>
         <Image 
                source={require('../assets/Icons/wimmyCostume1.png')}
                width={270}
                height={188} />

            <View 
            style={styles.wimcoins}>
                 <Image 
                          source={require('../assets/Icons/wimmyCoin.png')}
                          width={270}
                          height={188} 
                 />
         <Text>30wims</Text>

            </View>

            <ModalComp />
    </Pressable>

    <Pressable style={styles.costume}
        onPress={() => handleCostumeClick(require('../assets/Icons/wimmyCostume2.png'))}>
        <Image  
                source={require('../assets/Icons/wimmyCostume2.png')}
                width={270}
                height={188} /> 
        
        <View style={styles.wimcoins}>
                 <Image 
                          source={require('../assets/Icons/wimmyCoin.png')}
                          width={270}
                          height={188} 
                 />
         <Text>50wims</Text>
            </View>
        
            <ModalComp /> 
    </Pressable>

</View>



    </View>


        <View style={styles.navBar}>
            <NavBar navigation={navigation} />
        </View>

        </>

        
    )
}


const styles = StyleSheet.create({
    wimmyPic: {
        display: 'flex',
        alignItems: 'center',
    },
    navBar: {
        display: "flex",
        alignItems: 'center',
        position: 'absolute',
        bottom: 24
    },
    costumes: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    costume: {
        borderWidth: 5,
        borderColor: '#CDDDEC',
        padding: 20,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center'

        
    },
    wimcoins: {
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'row',
        gap:6,
        alignItems: 'center',
        justifyContent: 'center'
    },


})