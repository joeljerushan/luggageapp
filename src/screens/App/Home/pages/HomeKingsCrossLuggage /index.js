import {
  Alert,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import HomeHeader from '../../../../../components/HomeHeader';
import HomeToday from '../HomeToday';
import HomeUpComing from '../HomeUpcoming';
import {RNCamera} from 'react-native-camera';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import HomePast from '../HomePast';
import HomeTabButton from '../../../../../components/HomeTabButton';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const HomeKingsCrossLuggage = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('today');
  const [cameraVisible, setCameraVisible] = useState(false); // Controls camera visibility
  const [lastScannedQR, setLastScannedQR] = useState(null); // Save the last scanned QR

  const handleTabPress = tab => {
    setActiveTab(tab);
    console.log(`Active Tab: ${tab}`);
  };

  // Request camera permission
  const requestCameraPermission = async () => {
    try {
      const result = await request(
        Platform.OS === 'android'
          ? PERMISSIONS.ANDROID.CAMERA
          : PERMISSIONS.IOS.CAMERA,
      );
      if (result === RESULTS.GRANTED) {
        setCameraVisible(true);
      } else {
        Alert.alert(
          'Permission Denied',
          'Camera access is required to scan QR codes.',
        );
      }
    } catch (error) {
      console.warn('Permission error:', error);
    }
  };

  // Handle QR code scanning
  const onBarcodeRead = event => {
    const qrCode = event.data;
    console.log('QR code scanned:', qrCode);
    saveQRKey(qrCode);
    setCameraVisible(false); // Close camera after scanning
  };

  // Save last scanned QR code locally
  const saveQRKey = async qrCode => {
    try {
      await AsyncStorage.setItem('lastScannedQR', qrCode);
      setLastScannedQR(qrCode);
      console.log('QR code saved locally:', qrCode);
    } catch (error) {
      console.error('Error saving QR code:', error);
    }
  };

  // Handle scan QR button press
  const handleScanQrPress = () => {
    if (cameraVisible) {
      setCameraVisible(false); // Close camera if it's already visible
    } else {
      requestCameraPermission(); // Open camera if permission granted
    }
  };

  // Handle notification button press
  const handleNotificationPress = () => {
    navigation.navigate('AccountScreenStack', { screen: 'Notifications' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainContainer}>
          {/* Header */}
          <HomeHeader
            title="Kings cross Luggage"
            onPressNotification={handleNotificationPress}
            onPressSearch={() => {}}
            onPressScanQr={handleScanQrPress}
          />
          
          {/* Open Camera Gray View */}
          {cameraVisible && (
            <View style={styles.grayView}>
              <RNCamera
                style={styles.cameraView}
                onBarCodeRead={onBarcodeRead}
                captureAudio={false} // Disable audio capture
                type={RNCamera.Constants.Type.back} // Use back camera
                flashMode={RNCamera.Constants.FlashMode.off} // Optionally turn off flash
              />
            </View>
          )}
          
          {/* Tab Button */}
          <HomeTabButton
            style={styles.tabButton}
            leftTabNumber={'02'}
            middleTabNumber={'10'}
            rightTabNumber={'56'}
            activeTab={activeTab}
            onTabPress={handleTabPress}
          />
        </View>

        {/* Active Tab */}
        {activeTab === 'today' && <HomeToday />}
        {activeTab === 'upcoming' && <HomeUpComing />}
        {activeTab === 'past' && <HomePast />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeKingsCrossLuggage;
