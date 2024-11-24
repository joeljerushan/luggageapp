import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {styles} from './styles';
import HomeHeader from '../../../../../components/HomeHeader';
import HomeToday from '../HomeToday';
import HomeUpComing from '../HomeUpcoming';
import { launchCamera } from 'react-native-image-picker';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import HomePast from '../HomePast';
import HomeTabButton from '../../../../../components/HomeTabButton';

const HomeKingsCrossLuggage = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('today');
  const [cameraVisible, setCameraVisible] = useState(false);

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    console.log(`Active Tab: ${tab}`);
    // Additional logic for each tab can be added here
  };

  // Request camera permission and open the camera if granted
const requestCameraPermission = async () => {
  try {
    const result = await request(
      Platform.OS === 'android'
        ? PERMISSIONS.ANDROID.CAMERA
        : PERMISSIONS.IOS.CAMERA
    );

    if (result === RESULTS.GRANTED) {
      openCamera(); // Call the camera function if permission is granted
    } else {
      Alert.alert(
        'Permission Denied',
        'Camera access is required to take pictures.'
      );
    }
  } catch (error) {
    console.warn('Permission error:', error);
  }
};

// Open the device's camera to take a picture
const openCamera = async () => {
  const result = await launchCamera({
    mediaType: 'photo',
    saveToPhotos: true,
  });

  if (result.assets) {
    const uri = result.assets[0].uri;
    console.log('Selected image from camera:', uri); // Log the URI of the selected image
    onSelectImage(uri); // Notify parent component or perform further actions
  }
};

// Function to trigger the camera
const handleCamera = () => {
  requestCameraPermission(); // Directly request camera permission and open the camera
};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.mainContainer}>
          {/* Header */}
          <HomeHeader
            title="Kings cross Luggage"
            onPressNotification={() => {
              navigation.navigate('AccountScreenStack', {
                screen: 'Notifications'
              })
            }}
            onPressSearch={() => {}}
            onPressScanQr={handleCamera}
          />
          <TouchableOpacity onPress={() => navigation.navigate('HomeBooking')}>
          </TouchableOpacity>
          {/* Open Camera Gray View */}
          <View style={styles.grayView}>

          </View>
          {/* Tab Button */}
          <HomeTabButton
            leftTabNumber={'02'}
            middleTabNumber={'10'}
            rightTabNumber={'56'}
            activeTab={activeTab}
            onTabPress={handleTabPress}
          />
          {/* Ready To Check In List */}
          {/* <ReadyToCheckInList/> */}
        </View>

        {/* Active Tab */}
        {activeTab === 'today' && (
          <HomeToday/>
        )}
        {activeTab === 'upcoming' && (
          <HomeUpComing/>
        )}
        {activeTab === 'past' && (
          <HomePast/>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeKingsCrossLuggage;
