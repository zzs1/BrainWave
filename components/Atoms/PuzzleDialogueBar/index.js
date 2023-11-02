import { StyleSheet, View} from 'react-native'
import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { Text } from 'react-native-svg';

export default function PuzzleDialogueBar({ lineColor}) {
    const [circleColor, setCircleColor] = useState('#EADBB4')

    //     }

    const handleColorChange = () => {
      
        setLineColor(lineColor === '#EADBB4' ? '#005AB5' : '#EADBB4');
        setCircleColor(circleColor === '#005AB5' ? '#EADBB4' : '#005AB5');
      };
     
    
    return(
        <View style={styles.circleContainer}>
            <View style={[styles.circle, { backgroundColor: '#005AB5' }]}></View>
            <View style={[styles.line, { backgroundColor: lineColor }]}></View>
            <View style={[styles.circle, { backgroundColor: circleColor }]}></View>
            <View style={[styles.line, { backgroundColor: lineColor }]}></View>
            <View style={[styles.circle, { backgroundColor: circleColor }]}></View>
            <View style={[styles.line, { backgroundColor: lineColor }]}></View>
            <View style={[styles.circle, { backgroundColor: circleColor }]}></View>
        </View>
    )
}


const styles = StyleSheet.create({
circleContainer: {
    flex: 1,
    flexDirection: 'row',
    // gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 10,
},
circle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor:'#005AB5'
},
line:{
    width:45,
    height:5,
    backgroundColor:'#EADBB4',
    // paddingRight: 50
},
circle_two:{
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor:'#EADBB4'
},
line_two:{
    width:45,
    height:5,
    backgroundColor:'#EADBB4',
},
circle_three:{
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor:'#EADBB4'
},
line_three:{
    width:45,
    height:5,
    backgroundColor:'#EADBB4',
},
circle_four:{
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor:'#EADBB4'
},

})