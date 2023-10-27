import { StyleSheet, View} from 'react-native'
import { useTheme } from '@react-navigation/native';

export default function ProgressBar({
    num = 5,
    step = 1
}) {
    const { colors } = useTheme();

    const circles = []
    for (var i = 0; i < num; i++) {
        if (step > i) {
            circles.push(<View key={i} style={{
                ...styles.circle,
                backgroundColor: colors.diaProgFill
            }}></View>)
        } else {
            circles.push(<View key={i} style={{
                ...styles.circle,
                backgroundColor: colors.diaProgBG
            }}></View>)
        }
    }

    return (
        <View style={styles.circleContainer}>
            {circles}
        </View>
    );
}

const styles = StyleSheet.create({
    circleContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 20,
        alignContent: 'center',
        justifyContent: 'center'
    },
    circle: {
        width: 15,
        height: 15,
        borderRadius: 10
    }
})