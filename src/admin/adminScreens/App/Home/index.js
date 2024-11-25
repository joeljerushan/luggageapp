import {
  Alert,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import { Camera } from 'react-native-vision-camera'; // Import Vision Cameraimport HomePast from '../HomePast';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { styles } from './styles';
import HomeTabButton from '../../../../components/HomeTabButton';
import HomeAdminToday from './HomeAdminToday';
import HomeAdminPast from './HomeAdminPast';
import HomeAdminUpComing from './HomeAdminUpComing';
import AdminHomeHeader from '../../../adminComponent/AdminHomeHeader';
import HomeAdminAllStorePopUp from './HomePopUps/HomeAdminAllStorePopUp';

const HomeAdmin = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('today');
  const [cameraVisible, setCameraVisible] = useState(false); // Controls camera visibility
  const [hasPermission, setHasPermission] = useState(false); // For permission handling
  const [lastScannedQR, setLastScannedQR] = useState(null); // Save the last scanned QR

  const homeAdminAllStorePopUpModalRef = useRef(null);

  const handleTabPress = tab => {
    setActiveTab(tab);
    console.log(`Active Tab: ${tab}`);
  };

  // Request camera permission
  useEffect(() => {
    const requestCameraPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      const microphonePermission = await Camera.requestMicrophonePermission();

      if (cameraPermission === 'authorized' && microphonePermission === 'authorized') {
        setHasPermission(true);
      } else {
        Alert.alert(
          'Permission Denied',
          'Camera access is required to scan QR codes.'
        );
      }
    };

    if (cameraVisible) {
      requestCameraPermission(); // Only request when camera is visible
    }
  }, [cameraVisible]);

  // Handle QR code scanning
  const onBarcodeRead = event => {
    const qrCode = event.nativeEvent.codeStringValue;
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
    } else if (hasPermission) {
      setCameraVisible(true); // Open camera if permission is granted
    } else {
      Alert.alert('Permission required', 'Camera permission is required to scan QR codes.');
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
          <AdminHomeHeader
            title='All Store'
            // onPressNotification={handleNotificationPress}
            onPressSearch={() => {}}
            onPressScanQr={handleScanQrPress}
            onPressDropView={() => {
              console.log('Pressed Drop View');
              homeAdminAllStorePopUpModalRef?.current?.present();
            }}
          />
          
          {/* Open Camera Gray View */}
          {cameraVisible && hasPermission && (
            <View style={styles.grayView}>
              <Camera
                style={styles.cameraView}
                device={Camera.getAvailableCameraDevices()[0]} // Use back camera
                isActive={cameraVisible} // Camera is active only when visible
                onCodesScanned={onBarcodeRead} // Handle barcode scan
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
        {activeTab === 'today' && <HomeAdminToday/>}
        {activeTab === 'upcoming' && <HomeAdminUpComing/>}
        {activeTab === 'past' && <HomeAdminPast />}
      </ScrollView>

      {/* Popup */}
      <HomeAdminAllStorePopUp
        bottomSheetModalRef={homeAdminAllStorePopUpModalRef}
        onPress={() => {
          navigation.navigate('AccountAdminScreenStack', {
            screen: 'AccountStoreAdmin',
          });
          homeAdminAllStorePopUpModalRef?.current?.close();
        }}
      />
    </SafeAreaView>
  );
};

export default HomeAdmin;
