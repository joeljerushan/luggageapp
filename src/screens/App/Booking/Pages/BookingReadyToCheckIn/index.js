import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, { useState } from 'react';
import {styles} from './styles';
import ReadyToCheckInList from '../../../../../components/ReadyToCheckInList';
import BackArrow from '@/assets/icons/ArrowSquareLeft-Linear.svg';
import TopHeader from '../../../../../components/TopHeader';
import PrimaryButton from '../../../../../components/Button/PrimaryButton';
import ImagePicker from '../../../../../components/ImagePicker';
import ImageViewerCard from '../../../../../components/ImageViewerCard';
import AddOptionButton from '../../../../../components/Button/AddOptionButton';

const BookingReadyToCheckIn = () => {
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
          />

          {/* Confirmaed Data */}
          <ReadyToCheckInList 
            style={styles.readyToCheckInList}
            id={readyToCheckInData.id}
            status={readyToCheckInData.status}
            name={readyToCheckInData.name}
            dropOff={readyToCheckInData.dropOff}
            pickUp={readyToCheckInData.pickUp}
            bags={readyToCheckInData.bags}
            totalAmount={readyToCheckInData.totalAmount}
            days={readyToCheckInData.days}
            orderId={readyToCheckInData.orderId}
            description={readyToCheckInData.description}
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

          {/* Add insurance */}
          <AddOptionButton
            title='Add insurance'
            type='money'
            onPress={() => console.log('Add insurance')}
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
              title="Confirm Check-in"
              onPress={() => {
                console.log('Done');
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

export default BookingReadyToCheckIn;

const readyToCheckInData = {
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
