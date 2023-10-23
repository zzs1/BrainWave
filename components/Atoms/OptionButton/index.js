import { Pressable, TouchableOpacity, View, Text, Linking } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

export default function OptionButton(props) {
    const { onPress, title = 'Option 1' } = props;
   
    return(
        <>
        <View style={styles.option_button_container}>
            <View style={styles.option_button}>
        <Pressable  onPress={onPress} title='Option 1'>
            <Text style={styles.text_container} title={title}>{title}</Text>
        </Pressable>
        </View>
       
        <Pressable  style={styles.option_button_three}>
            <View>
            <Text style={styles.text_container}>Option 2</Text>
            </View>
        </Pressable >
        </View>
        <View style={styles.option_button_container}>
        <Pressable style={styles.option_button_two}>
            <Text style={styles.text_container}>Option 3</Text>
        </Pressable >
        <Pressable  style={styles.option_button_four}>
            <Text style={styles.text_container}>Option 4</Text>
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
    fontColor: 'white'
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
    marginTop:20
  },
  option_button_four:{
    height: 60,
    width: 150,
    borderRadius:10,
    backgroundColor:'#0C7BDC',
    marginTop:10
  },
  option_button_container:{
    display: 'flex',
    flexDirection:'row',
    gap:5
  }

}); 