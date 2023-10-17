import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, useColorScheme, Image } from 'react-native'

const circ1 = require("../../assets/progressbar/circ1.png");
const circ2 = require("../../assets/progressbar/circ2.png");
export default function ProgressBar({
    num = 5,
    step = 1
}) {

    const images = []
    for (var i = 0; i < num; i++) {
        if (step > i) {
            images.push(<Image key={i} source={circ2} />)
        } else {
            images.push(<Image key={i} source={circ1} />)
        }
    }

    return (
        <SafeAreaView>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                gap: 10,
            }}>
                <Text></Text>
                {images}
            </View>
        </SafeAreaView>
    );
}