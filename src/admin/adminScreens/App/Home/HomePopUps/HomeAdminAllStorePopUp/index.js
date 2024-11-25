import {FlatList, Platform, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import PropTypes from 'prop-types';
import {styles} from './styles';
import AddOptionButton from '../../../../../../components/Button/AddOptionButton';
import AdminImageTitleCard from '../../../../../adminComponent/AdminImageTitleCard';

const HomeAdminAllStorePopUp = props => {
  const {bottomSheetModalRef, onPress} = props;

  const snapPoint = useMemo(
    () => [Platform.OS == 'android' ? '75%' : '75%'],
    [],
  );

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        style={styles.bottomSheetBackdrop}
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
        pressBehavior={'close'}
      />
    ),
    [],
  );

  const onPressClose = () => {
    bottomSheetModalRef.current?.close();
  };

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoint}
      backdropComponent={renderBackdrop}
      backgroundStyle={styles.bottomSheet}
      handleComponent={null}>
      <View style={styles.mainContentContainer}>
        {/* Header Component */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}> {'All Stores'} </Text>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={onPressClose}
            // style = {styles.closeIconContainer}
          >
            {/* <AntDesign name='close' size={20} color='black' /> */}
          </TouchableOpacity>
        </View>

        {/* <View> */}
        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.bottomSheetScrollViewContent}>
          <View style={styles.listOfDataContainer}>
            {/* Option Button */}
            <AddOptionButton title="All Websites" type="bag" />

            {/* Store Data */}
            <FlatList
              data={userData}
              scrollEnabled={false}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <AdminImageTitleCard
                    imageUri={item.image}
                    title={item.title}
                    description={item.description}
                    onPress={(item) => {
                        onPress && onPress(item);
                    }}
                  />
                );
              }}
            />
          </View>
        </BottomSheetScrollView>
        {/* </View> */}
      </View>
    </BottomSheetModal>
  );
};

// Define Props
HomeAdminAllStorePopUp.propTypes = {
  bottomSheetModalRef: PropTypes.object,
  onPress: PropTypes.func,
};

export default HomeAdminAllStorePopUp;

const userData = [
    {
      id: 1,
      image:
        'https://cdn.telugu360.com/wp-content/uploads/2019/03/Mahesh-Babu-fans-not-happy-with-Sai-Pallavi.jpg',
      title: 'Kings cross',
      description: 'Luggage Storage',
    },
    {
      id: 2,
      image:
        'https://cdn.telugu360.com/wp-content/uploads/2019/03/Mahesh-Babu-fans-not-happy-with-Sai-Pallavi.jpg',
      title: 'Kings cross',
      description: 'Luggage Storage',
    },
    {
      id: 3,
      image:
        'https://cdn.telugu360.com/wp-content/uploads/2019/03/Mahesh-Babu-fans-not-happy-with-Sai-Pallavi.jpg',
      title: 'Kings cross',
      description: 'Luggage Storage',
    },
    {
      id: 4,
      image:
        'https://cdn.telugu360.com/wp-content/uploads/2019/03/Mahesh-Babu-fans-not-happy-with-Sai-Pallavi.jpg',
      title: 'Kings cross',
      description: 'Luggage Storage',
    },
    {
      id: 5,
      image:
        'https://cdn.telugu360.com/wp-content/uploads/2019/03/Mahesh-Babu-fans-not-happy-with-Sai-Pallavi.jpg',
      title: 'Kings cross',
      description: 'Luggage Storage',
    },
    {
      id: 6,
      image:
        'https://cdn.telugu360.com/wp-content/uploads/2019/03/Mahesh-Babu-fans-not-happy-with-Sai-Pallavi.jpg',
      title: 'Kings cross',
      description: 'Luggage Storage',
    },
  ];
