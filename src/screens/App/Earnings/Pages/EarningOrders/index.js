import {
  FlatList,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import React from 'react';
import TopHeader from '../../../../../components/TopHeader';
import BackArrow from '@/assets/icons/ArrowSquareLeft-Linear.svg';
import ReadyToCheckInList from '../../../../../components/ReadyToCheckInList';
import {styles} from './styles';
import CheckedInList from '../../../../../components/CheckedInList';

const EarningOrders = ({navigation}) => {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerScroll}>
        <View style={styles.mainContainer}>
          {/* Top Header */}
          <TopHeader
            title={'Orders'}
            childFront={<BackArrow />}
            onPressLeft={() => navigation.goBack()}
          />
          {/* Ready To Check In */}
          <FlatList
            data={readyToCheckIn}
            scrollEnabled={false}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <ReadyToCheckInList
                  style={styles.readyToCheckInList}
                  id={item.id}
                  status={item.status}
                  name={item.name}
                  dropOff={item.dropOff}
                  pickUp={item.pickUp}
                  bags={item.bags}
                  totalAmount={item.totalAmount}
                  days={item.days}
                  orderId={item.orderId}
                  description={item.description}
                  disabled
                />
              );
            }}
          />

          {/* Checked In */}
          <FlatList
            data={checkedInData}
            scrollEnabled={false}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <CheckedInList
                  id={item.id}
                  status={item.status}
                  type={item.type}
                  name={item.name}
                  dropOff={item.dropOff}
                  pickUp={item.pickUp}
                  bags={item.bags}
                  totalAmount={item.totalAmount}
                  days={item.days}
                  orderId={item.orderId}
                  description={item.description}
                  disabled
                />
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EarningOrders;

const readyToCheckIn = [
  {
    id: 1,
    status: 'READY TO CHECK IN',
    name: 'James Bond',
    dropOff: {
      time: '9.00 AM',
      date: '02/11',
    },
    pickUp: {
      time: '9.00 AM',
      date: '02/11',
    },
    bags: '02',
    totalAmount: '£25.56',
    days: '04',
    orderId: '123456',
    description: 'James completed payment online 12 days ago',
  },
  {
    id: 2,
    status: 'READY TO CHECK IN',
    name: 'James Bond',
    dropOff: {
      time: '9.00 AM',
      date: '02/11',
    },
    pickUp: {
      time: '9.00 AM',
      date: '02/11',
    },
    bags: '02',
    totalAmount: '£25.56',
    days: '04',
    orderId: '123456',
    description: 'James completed payment online 12 days ago',
  },
];

const checkedInData = [
  {
    id: 1,
    status: 'CHECKED IN',
    type: 'paidInShop',
    name: 'James Bond',
    dropOff: {
      time: '9.00 AM',
      date: '02/11',
    },
    pickUp: {
      time: '9.00 AM',
      date: '02/11',
    },
    bags: '02',
    totalAmount: '£25.56',
    days: '04',
    orderId: '123456',
    description: 'James completed payment online 12 days ago',
  },
  {
    id: 2,
    status: 'CHECKED IN',
    type: 'paidCash',
    name: 'James Bond',
    dropOff: {
      time: '9.00 AM',
      date: '02/11',
    },
    pickUp: {
      time: '9.00 AM',
      date: '02/11',
    },
    bags: '02',
    totalAmount: '£25.56',
    days: '04',
    orderId: '123456',
    description: 'James completed payment online 12 days ago',
  },
];
