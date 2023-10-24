import { Pressable, TouchableOpacity, View, Text, Linking } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

export default function OptionButton({
  title1='',
  title2='',
  title3='',
  title4=''
}) {
   
    return(
        <>
        <View style={styles.option_button_container}>
            <View style={styles.option_button}>
        <Pressable>
            <Text style={styles.text_container}>{title1}</Text>
        </Pressable>
        </View>
        <Pressable  style={styles.option_button_three}>
            <View>
            <Text style={styles.text_container}>{title2}</Text>
            </View>
        </Pressable >
        </View>
        <View style={styles.option_button_container}>
        <Pressable style={styles.option_button_two}>
            <Text style={styles.text_container}>{title3}</Text>
        </Pressable >
        <Pressable  style={styles.option_button_four}>
            <Text style={styles.text_container}>{title4}</Text>
        </Pressable >
        </View>
        </>
    )
}
const styles =  StyleSheet.create({
  option_button:{
    height: 60,
    width: 150,
    borderRadius:10,
    backgroundColor:'#E84A34',
    marginTop:20,
    color:'#FFFFFF',

    fontSize: 15,
    fontColor: 'white',
    borderBottomWidth: 9,
    borderBottomLeftRadius: 10,
    borderBottomColor: "#C33C2A",
  },
  text_container:{
   color:'#FFFFFF',
   fontSize:20,
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   marginTop: 16,
   marginLeft: 35,
   fontWeight:'bold'
  },
  option_button_two:{
    height: 60,
    width: 150,
    borderRadius:10,
    backgroundColor:'#EFB00C',
    marginTop:10,
    borderBottomWidth: 9,
    borderBottomLeftRadius: 10,
    borderBottomColor: "#CD9300",
  },
  option_button_container:{
    display: 'flex',
    flexDirection:'row',
    gap:5,
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: 40
  },
  option_button_three:{
    height: 60,
    width: 150,
    borderRadius:10,
    backgroundColor:'#10CA23',
    marginTop:20,
    borderBottomWidth: 9,
    borderBottomLeftRadius: 10,
    borderBottomColor: "#079515",
  },
  option_button_four:{
    height: 60,
    width: 150,
    borderRadius:10,
    backgroundColor:'#0C7BDC',
    marginTop:10,
    borderBottomWidth: 9,
    borderBottomLeftRadius: 10,
    borderBottomColor: "#005AB5",
  },
  option_button_container:{
    display: 'flex',
    flexDirection:'row',
    gap:5,
  }

}); 