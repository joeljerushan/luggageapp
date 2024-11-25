import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import TopHeader from '../../../../../components/TopHeader';
import BackArrow from '@/assets/icons/ArrowSquareLeft-Linear.svg';
import AdminDropDrownView from '../../../../adminComponent/Input';
import DatePicker from '../../../../../components/Input/DatePicker';
import { styles } from './styles';

const AdminEarningWebsite = ({ navigation }) => {
  const [selectDay, setSelectDay] = useState({
    label: '',
    value: '',
  });
  const [selectdate, setSelectDate] = useState('');
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerScroll}>
        <View style={styles.mainContainer}>
          {/* header */}
          <TopHeader 
            title={'Website'} 
            childFront={<BackArrow />}
            onPressLeft={() => navigation.goBack()}
          />

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
            <DatePicker
              onSelectDate={() => {
                console.log('selectdate', selectdate);
                setSelectDate();
              }}
            />
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

export default AdminEarningWebsite;

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
    title: 'In Store orders',
    value: '10',
  },
  {
    id: 2,
    title: 'Card orders',
    value: '10',
  },
  {
    id: 3,
    title: 'Cash orders',
    value: '10',
  },
  {
    id: 4,
    title: 'Total paid',
    value: '£352.46',
  },
  {
    id: 5,
    title: 'Total revenue',
    value: '£291.16',
  },
  {
    id: 6,
    title: 'Payment link',
    value: '10',
  },
  {
    id: 7,
    title: 'Added Insurance',
    value: '£6.21',
  },
];