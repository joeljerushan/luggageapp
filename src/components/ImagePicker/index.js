import { Alert, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import AddCircle from '@/assets/icons/AddCircle.svg'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import PropTypes from 'prop-types'
import { styles } from './styles';

const ImagePicker = (props) => {
    const { onSelectImage } = props;

  // Request camera permission (Android and iOS)
  const requestCameraPermission = async () => {
    try {
      const result = await request(
        Platform.OS === 'android'
          ? PERMISSIONS.ANDROID.CAMERA
          : PERMISSIONS.IOS.CAMERA,
      );
      if (result === RESULTS.GRANTED) {
        openCamera();
      } else {
        Alert.alert(
          'Permission Denied',
          'Camera access is required to take pictures.',
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
      onSelectImage(uri); // Notify parent component
    }
  };

  // Open the device's gallery to select a picture
  const openGallery = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
    });
    if (result.assets) {
      const uri = result.assets[0].uri;
      console.log('Select from gallery:', uri); // Log the URI of the selected image
      onSelectImage(result.assets[0].uri);
    }
  };

  // Function to handle user options: open camera or gallery
  const handleImagePicker = () => {
    Alert.alert(
      'Select Option',
      'Choose an option to select a picture',
      [
        {text: 'Camera', onPress: requestCameraPermission},
        {text: 'Gallery', onPress: openGallery},
        {text: 'Cancel', style: 'cancel'},
      ],
      {cancelable: true},
    );
  };

  return (
    <TouchableOpacity 
      style = {styles.container}
      activeOpacity={0.5}
      onPress={handleImagePicker}
    >
      <AddCircle/>
    </TouchableOpacity>
  )
}

// Define Type Props
ImagePicker.propTypes = {
    onSelectImage: PropTypes.func,
  };

export default ImagePicker;