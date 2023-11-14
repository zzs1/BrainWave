
import { StyleSheet, Text, View, } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function Box ({
    title = '',
    
}) {
    const { colors } = useTheme();

    return(
        <View style={{
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            borderWidth: 2,
            borderColor: colors.dialogueBorder,
        }}>
            <Text style={{
                fontSize: 15,
                color: colors.textColour
            }}>{title}</Text>
        </View>
    )
}
