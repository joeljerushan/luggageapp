import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, { useState } from 'react';
import {styles} from './styles';
import BackArrow from '@/assets/icons/ArrowSquareLeft-Linear.svg';
import TopHeader from '../../../../../components/TopHeader';
import PrimaryButton from '../../../../../components/Button/PrimaryButton';
import ImagePicker from '../../../../../components/ImagePicker';
import ImageViewerCard from '../../../../../components/ImageViewerCard';
import AddOptionButton from '../../../../../components/Button/AddOptionButton';
import CheckedInList from '../../../../../components/CheckedInList';

const BookingCheckedIn = ({ navigation }) => {
    const [selectedImageUri, setSelectedImageUri] = useState(null);
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

          {/* Confirmaed Data */}
          <CheckedInList 
            style={styles.readyToCheckInList}
            id={checkedInData.id}
            status={checkedInData.status}
            name={checkedInData.name}
            dropOff={checkedInData.dropOff}
            pickUp={checkedInData.pickUp}
            bags={checkedInData.bags}
            totalAmount={checkedInData.totalAmount}
            days={checkedInData.days}
            orderId={checkedInData.orderId}
            description={checkedInData.description}
          />

          {/* Image Picker */}
          <ImagePicker 
            onSelectImage={setSelectedImageUri}
          />

          {/* Image Viewer */}
          {selectedImageUri && (
             <ImageViewerCard 
               imageUri={selectedImageUri}
             />
          )}

          {/* Customer Data */}
          <View style={styles.customerDataContainer}>
            <Text style={styles.customerDataTitle}>Customer email</Text>
            <Text style={styles.customerData}>{customerData.email}</Text>
            <Text style={[styles.customerDataTitle, {marginTop: 5}]}>Customer phone number</Text>
            <Text style={styles.customerData}>
              {customerData.phoneNumber}
            </Text>
          </View>

          {/* Option Button */}
          {/* Add more bags */}
          <AddOptionButton
            title='Add more bags'
            type='bag'
            onPress={() => console.log('Add more bags')}
          />

          {/* Late checkout */}
          <AddOptionButton
            title='Late checkout'
            type='money'
            onPress={() => console.log('Late checkout')}
          />

          {/* Booking Activity */}
          <View style={styles.bookingActivityHeaderContainer}>
            <Text style={styles.bookingActivityHeader}>Booking Activity</Text>
            <RenderDataBookingActivity
              data={bookingData}
            />
          </View>

          {/* Button */}
          <View style={styles.buttonContainer}>
            <PrimaryButton
              title="Check out"
              onPress={() => {
                navigation.navigate('BookingConfirm');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Render Booking Activity
const RenderDataBookingActivity = ({data}) => {
    return (
      <>
        {data?.map((item) => (
          <View style={styles.bookActiveContainer} key={item.id}>
            <Text style={styles.bookActiveTitle}>{item.title}</Text>
            <Text style={styles.bookActivedata}>
              {item.date} {item.time}
            </Text>
          </View>
        ))}
      </>
    );
  };

export default BookingCheckedIn;

const checkedInData = {
  id: 1,
  status: 'CHECKED IN',
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

const customerData = {
  email: 'Np2Mx@example.com',
  phoneNumber: '0123456789',
};

const bookingData = [
  {
    id: 1,
    title: 'James bond dropped off 3 bags',
    date: '02/11',
    time: '9.00 AM',
  },
  {
    id: 2,
    title: 'James bond dropped off 3 bags',
    date: '02/11',
    time: '9.00 AM',
  },
  {
    id: 3,
    title: 'James bond dropped off 3 bags',
    date: '02/11',
    time: '9.00 AM',
  },
];
