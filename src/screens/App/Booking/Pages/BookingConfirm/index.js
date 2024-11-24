import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import TopHeader from '../../../../../components/TopHeader';
import BackArrow from '@/assets/icons/ArrowSquareLeft-Linear.svg';
import {styles} from './styles';
import SuccessSvg from '@/assets/icons/Success.svg';
import PrimaryButton from '../../../../../components/Button/PrimaryButton';
import BookingComfirmedCard from '../../../../../components/BookingComfirmedCard';

const BookingConfirm = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerScroll}>
        <View style={styles.mainContainer}>
          {/* Header */}
          <TopHeader 
            title={'Booking'} 
            childFront={<BackArrow />} 
            onPressLeft={() => navigation.goBack()}
          />
          {/* SuccessCard */}
          <View style={styles.successCard}>
            <SuccessSvg 
              style={{ marginBottom: 10 }}
            />
            {/* Text */}
            <Text style={styles.successText}>Check-in</Text>
            <Text style={styles.successText}>Confirmed</Text>
          </View>

          {/* Confirmaed Data */}
          <BookingComfirmedCard
            id={data.id}
            name={data.name}
            dropOff={data.dropOff}
            pickUp={data.pickUp}
            bags={data.bags}
            totalAmount={data.totalAmount}
            days={data.days}
            orderId={data.orderId}
          />

          {/* Button */}
          <View style={styles.buttonContainer}>
            <PrimaryButton
              title="Done"
              onPress={() => {
                navigation.navigate('HomeScreenStack', {
                  screen: 'HomeKingsCrossLuggage',
                });
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingConfirm;

const data = {
  id: 1,
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
}
