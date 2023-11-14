import { StyleSheet, Text, View, Image, Pressable, TextInput, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { React, useState } from "react";
import { useTheme } from "@react-navigation/native";
import { ProgressChart } from "react-native-chart-kit";


export default function LevelBox(){

    const { colors } = useTheme();

    const data = {
        data: [0.4]
    };

    const chartConfig = {
        backgroundColor: colors.dialogueBG,
        backgroundGradientFrom: colors.dialogueBG,
        backgroundGradientTo: colors.dialogueBG,
        decimalPlaces: 1,
        color: (opacity = 1) => `rgba(${colors.chartBarColor}, ${opacity})`,
        labelColor: (opacity = 1) => colors.chartBarLabel,
        strokeWidth: 2,
        barPercentage: 0.5,
    }


    return(
        
        <View style={{
            // ...styles.box,
            height: 200,
            borderColor: colors.dialogueBorder,
        }}>

            <View style={{
                display: 'flex',
                backgroundColor: colors.dialogueBG,
                borderColor: colors.dialogueBorder,
                borderTopLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderTopRightRadius: 20,
                borderWidth: 2,
                width: 160,
            }}>
                <Text style={{   
                    fontSize: 20,
                    fontWeight: '900',
                    paddingTop: 10,
                    paddingLeft: 10, 
                    color: colors.text,          
                   }}>LEVEL</Text>
                <ProgressChart
                    data={data}
                    width={150}
                    height={150}
                    strokeWidth={16}
                    radius={32}
                    chartConfig={chartConfig}
                    hideLegend={true}
                    style={{
                        borderRadius: 20
                    }}
                />
            </View>
        </View>
        
    )
}    



