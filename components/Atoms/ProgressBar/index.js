import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, useColorScheme, Image } from 'react-native'

import Circle1 from '../../../assets/progressbar/circ1.png'
import Circle2 from '../../../assets/progressbar/circ2.png'

export default function ProgressBar({
    num = 5,
    step = 1
}) {

    const images = []
    for (var i = 0; i < num; i++) {
        if (step > i) {
            images.push(<Image key={i} source={Circle2} />)
        } else {
            images.push(<Image key={i} source={Circle1} />)
        }
    }

    return (
        <SafeAreaView>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                gap: 10,
                alignContent: 'center',
                justifyContent: 'center'
            }}>
                <Text></Text>
                {images}
            </View>
        </SafeAreaView>
    );
}