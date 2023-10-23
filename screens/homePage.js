import React from 'react';
import { StyleSheet, Text, View, useColorScheme, Image, Pressable, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useState, useEffect } from 'react';

import AccountCard from '../components/Molecules/AccountCard';
import SectionCardMain from '../components/Molecules/SectionCardMain';
import SectionCardSide from '../components/Molecules/SectionCardSide';
import CarouselButton from '../components/Atoms/CarouselBotton';
import MoveButton from '../components/Atoms/MoveButton';

import Avatar from '../assets/Icons/Avatar.png'

import { sectionCard } from '../data/sectionCards.js';

export default function HomePage({navigation}) {
    const [data, setData] = useState(sectionCard);
    const [number, setNumber] = useState(0);

    var colorScheme = useColorScheme();

    useEffect(() => {
        console.log(colorScheme);
    }, [colorScheme])

  return (
    <SafeAreaView style={{...styles.container,backgroundColor: colorScheme === 'light' ? '#FFFFFF': '#584b9d'}}>
      <AccountCard 
        name='Navid Memari'
        level={15}
        fontColor='#0C7BDC'
        prog={75}
        theme='light'
        avatarImg={Avatar}
      />
      <View style={styles.cardContainer}>
        <View style={{
          marginRight: -100
        }}>
          <SectionCardSide 
            color='#256FB9'
            border='#005AB5'
            theme='dark'
            image={data[number].image}
            title={data[number].title}
          />
        </View>
        <SectionCardMain 
          color='#0C7BDC'
          border='#005AB5'
          theme='dark'
          image={data[number].image}
          title={data[number].title}
          prog={65}
        />
        <View style={{
          marginLeft: -100,
          zIndex: -1
        }}>
          <SectionCardSide 
            color='#256FB9'
            border='#005AB5'
            theme='dark'
            image={data[number].image}
            title={data[number].title}
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Pressable onPress={() => setNumber(number === 0 ? data.length - 1 : number - 1)}>
          <MoveButton 
            direction='left'
            color='#0C7BDC'
            shadowColor='#005AB5'
          />
        </Pressable>
        <Pressable onPress={() => navigation.push('InNav', {title: data[number].title})}>
          <CarouselButton 
            btnText="Let's Go"
            color='#0C7BDC'
            shadowColor='#005AB5'
          />
        </Pressable>
        <Pressable onPress={() => setNumber(number === data.length - 1 ? 0 : number + 1)}>
          <MoveButton 
            direction='right'
            color='#0C7BDC'
            shadowColor='#005AB5'
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 635,
    width: '100%',
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 340
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})