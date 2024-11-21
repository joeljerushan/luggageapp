import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TopHeader from '../../../../../components/TopHeader';
import Notification from '@/assets/icons/Home/Notification.svg';
import Calendar from '@/assets/icons/Calendar.svg';
import {styles} from './styles';
import SearchInput from '../../../../../components/Input/SearchInput';
import ReadyToCheckInList from '../../../../../components/ReadyToCheckInList';
import CustomCalendar from '../../../../../components/CustomCalendar';

const BookingCalendar = () => {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerScroll}>
        <View style={styles.mainContainer}>
          {/* Header */}
          <TopHeader
            title={'Booking'}
            childFront={<Notification />}
            childBack={<Calendar />}
          />
          {/* Search */}
          <SearchInput
            value={search}
            placeholder={'Search...'}
            onChangeText={text => setSearch(text)}
          />
          {/* Calendar */}
          <CustomCalendar/>

          {/* Ready To Check In */}
          <ReadyToCheckInList
            id={data.id}
            status={data.status}
            name={data.name}
            dropOff={data.dropOff}
            pickUp={data.pickUp}
            bags={data.bags}
            totalAmount={data.totalAmount}
            days={data.days}
            orderId={data.orderId}
            description={data.description}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingCalendar;

const data = {
  id: 1,
  status: 'READY TO CHECK IN',
  name: 'John Doe',
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
};
