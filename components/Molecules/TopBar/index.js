import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function TopBar({ navigation, points=0 }) {
  const { colors } = useTheme();
  const { dark } = useTheme();

  return (
    <>
      <View style={styles.container}>

        <Image
          source={dark ? require('../../../assets/Logo/logo-white.png') : require('../../../assets/Logo/logo-black.png')}
          style={styles.logo}
        />

        <View style={styles.rightCont}>
          <View style={styles.wimPoints}>
            <Image
              source={require('../../../assets/Icons/wimmyCoin.png')}
              width={40}
              height={40}
            />
            <Text style={{
              fontSize: 16,
              color: colors.text
            }}>{points}</Text>
          </View>

          <Pressable onPress={() => navigation.push('Settings')}>
            <Image
              source={dark ? require('../../../assets/Icons/setting.png') : require('../../../assets/Icons/settingBlack.png')}
              width={40}
              height={40} />
          </Pressable>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenWidth,
    marginBottom: 10,
    paddingRight: 15,
    paddingLeft: 15
  },
  logo: {
    objectFit: 'contain',
    width: 45,
    height: 45
  },
  rightCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 150
  }, 
  wimPoints: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
});