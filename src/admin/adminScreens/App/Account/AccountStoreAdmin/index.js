import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import TopHeader from '../../../../../components/TopHeader';
import BackArrow from '@/assets/icons/ArrowSquareLeft-Linear.svg';
import ImageTitleCard from '../../../../../components/ImageTitleCard';
import DatePicker from '../../../../../components/Input/DatePicker';
import AddOptionButton from '../../../../../components/Button/AddOptionButton';
import AdminDropDrownView from '../../../../adminComponent/Input';
import {styles} from './styles';

const AccountStoreAdmin = ({ navigation }) => {
  const [selectDay, setSelectDay] = useState({
    label: '',
    value: '',
  });

  const handleOnPress = (item) => {
    if (item.title == 'Employee 01') {
      navigation.navigate('EarningAccountScreenStack', {
        screen: 'AdminEarningEmployee',
      });
    }
  }
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerScroll}>
        <View style={styles.mainContainer}>
          {/* header */}
          <TopHeader 
            title={'Store'} 
            childFront={<BackArrow />}
          />

          {/* Image Title card */}
          <ImageTitleCard
            imageUri={userData.image}
            title={userData.title}
            description={userData.description}
          />

          {/* Option Button */}
          {/* Earnings */}
          <AddOptionButton title="Earnings" type="bag" />

          {/* website */}
          <AddOptionButton 
            title="Website" 
            type="bag" 
            onPress={() => {
              navigation.navigate('EarningAccountScreenStack', {
                screen: 'AdminEarningWebsite',
              })
            }}
          />

          {/* Employee */}
          <AddOptionButton 
            title="Employee" type="bag" />

          <View style={styles.dropDownCalendarContainer}>
            {/* DropDown */}
            <AdminDropDrownView
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
                <TouchableOpacity
                  style={styles.storeDataContainer}
                  activeOpacity={0.5}
                  onPress={() => {
                    handleOnPress(item)
                  }}>
                  <Text style={styles.storeDataTitle}>{item.title}</Text>
                  <Text style={styles.storeDataValue}>{item.value}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountStoreAdmin;

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
    title: 'Employee 01',
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
