import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ReadyToCheckInList from '../../../../../../components/ReadyToCheckInList';
import { styles } from './styles';

const BookingReady = () => {
  return (
    <View style={styles.container}>
      {/* Ready To Check In */}
      <FlatList
        data={readyToCheckIn}
        scrollEnabled={false}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        renderItem={({item}) => {
          return (
            <ReadyToCheckInList
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
            />
          );
        }}
      />
    </View>
  );
};

export default BookingReady;

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
