import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import TopHeader from '../../../../../components/TopHeader';
import CustomDropDown from '../../../../../components/Input/CustomDropDown';
import ImageTitleCard from '../../../../../components/ImageTitleCard';
import DatePicker from '../../../../../components/Input/DatePicker';
import {styles} from './styles';

const AccountStore = () => {
  const [selectDay, setSelectDay] = useState({
    label: '',
    value: '',
  });
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerScroll}>
        <View style={styles.mainContainer}>
          {/* header */}
          <TopHeader title={'Store'} />

          {/* Image Title card */}
          <ImageTitleCard
            imageUri={userData.image}
            title={userData.title}
            description={userData.description}
          />

          <View style={styles.dropDownCalendarContainer}>
            {/* DropDown */}
            <CustomDropDown
              style={styles.dropDownStyle}
              data={data}
              value={selectDay.value}
              onChange={setSelectDay}
              placeholder="Select"
            />
            {/* Calendar */}
            <DatePicker />
          </View>

          {/* Store Data */}
          <FlatList
            data={storeData}
            scrollEnabled={false}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={styles.storeDataContainer}>
                  <Text style={styles.storeDataTitle}>{item.title}</Text>
                  <Text style={styles.storeDataValue}>{item.value}</Text>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountStore;

const userData = {
  image:
    'https://cdn.telugu360.com/wp-content/uploads/2019/03/Mahesh-Babu-fans-not-happy-with-Sai-Pallavi.jpg',
  title: 'Kings cross',
  description: 'Luggage Storage',
};

const data = [
  {
    label: 'Today',
    value: 'today',
  },
  {
    label: 'Tomorrow',
    value: 'tomorrow',
  },
  {
    label: 'Item 3',
    value: '3',
  },
];

const storeData = [
  {
    id: 1,
    title: 'Total bags in the shop',
    value: '10',
  },
  {
    id: 2,
    title: 'Bags not collected',
    value: '10',
  },
  {
    id: 3,
    title: 'Bags collected',
    value: '10',
  },
  {
    id: 4,
    title: 'Bags not collected',
    value: '10',
  },
  {
    id: 5,
    title: 'Bags collected',
    value: '10',
  },
  {
    id: 6,
    title: 'Bags not collected',
    value: '10',
  },
  {
    id: 7,
    title: 'Bags collected',
    value: '10',
  },
];
