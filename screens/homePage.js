import React from 'react';
import { StyleSheet, View, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useState, useEffect } from 'react';

import AccountCard from '../components/Molecules/AccountCard';
import SectionCardMain from '../components/Molecules/SectionCardMain';
import SectionCardSide from '../components/Molecules/SectionCardSide';
import CarouselButton from '../components/Atoms/CarouselButton';
import MoveButton from '../components/Atoms/MoveButton';
import NavBar from '../components/Molecules/NavBar';

import Avatar from '../assets/Icons/Avatar.png'

import { sectionCard } from '../data/sectionCards.js';
import WimmyPopup from '../components/Molecules/WimmyPopup';

export default function HomePage({navigation}) {
    const [data, setData] = useState(sectionCard);
    const [number, setNumber] = useState(0);

    const handleImageOne = (num) => {
      if (num === 0) {
        return 2;
      } else if (num === 1) {
        return 0;
      } else if (num === 2) {
        return 1;
      }
    }

    const handleImageTwo = (num) => {
      if (num === 0) {
        return 1;
      } else if (num === 1) {
        return 2;
      } else if (num === 2) {
        return 0;
      }
    }

  return (
    <SafeAreaView style={styles.container}>
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
            image={data[handleImageOne(number)].image}
            title={data[handleImageOne(number)].title}
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
            image={data[handleImageTwo(number)].image}
            title={data[handleImageTwo(number)].title}
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
        <Pressable onPress={() => navigation.push('PuzzleMap', {title: data[number].title})}>
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
      <NavBar color='#0C7BDC' navigation={navigation} />
      <WimmyPopup title='WIMMY SAYS...' desc='Select a puzzle catagory that you want to explore!' instuction='Tap to continue.'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingTop: 50
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 340,
    marginTop: 70
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  }
})