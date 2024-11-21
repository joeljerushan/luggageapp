import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import TopHeader from '../../../../../components/TopHeader';
import BackArrow from '@/assets/icons/ArrowSquareLeft-Linear.svg';
import EarningTable from '../../../../../components/Table/EarningTable';

const EarningTableScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerScroll}
      >
        <View style={styles.mainContainer}>
          {/* header */}
          <TopHeader title={'Earnings'} childFront={<BackArrow />} />
          {/* table */}
          <EarningTable data={data} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EarningTableScreen;

const data = [
  {
    id: 1,
    date: '05/11',
    name: 'James Bond',
    status: 'Pending',
    revenue: '£25.56',
  },
  {
    id: 2,
    date: '05/11',
    name: 'James Bond',
    status: 'Completed',
    revenue: '£25.56',
  },
  {
    id: 3,
    date: '05/11',
    name: 'James Bond',
    status: 'Completed',
    revenue: '£25.56',
  },
  {
    id: 4,
    date: '05/11',
    name: 'James Bond',
    status: 'Completed',
    revenue: '£25.56',
  },
];
