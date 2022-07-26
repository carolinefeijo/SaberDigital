import { View, ScrollView  } from 'react-native';
import { smallList } from '../../assets/data/mock';
import React from 'react';
import styles from './styles';
import TopBar from './components/TopBar';
import WelcomeBar from './components/WelcomeBar/index.js';
import News from './components/News';
import SmallCard from './components/smallCard';


export default function Home({ navigation }) {
  const detailedNews = () => {
    navigation.navigate('NewsDetails')
  }
  const OpenDrawer = () => {
    navigation.openDrawer()
  }
  return (
    <View style={styles.container}>
      <TopBar OpenNavigator={OpenDrawer} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ margin: 10 }}>
        <WelcomeBar />
        <News />
        <SmallCard data={smallList} navigator={detailedNews} />
      </ScrollView>
    </View>
  )
}