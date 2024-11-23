import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import TopHeader from '../../../../../components/TopHeader';
import BackSvg from '@/assets/icons/ArrowSquareLeft-Linear.svg';
import CardSvg from '@/assets/icons/CardPos-Outline.svg';
import {styles} from './styles';
import CustomDropDown from '../../../../../components/Input/CustomDropDown';
import DatePicker from '../../../../../components/Input/DatePicker';
import DataTimeVisibleCard from '../../../../../components/DataTimeVisibleCard';

const EarningCard = () => {
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
          {/* Header */}
          <TopHeader
            title={'Store'}
            childFront={<BackSvg />}
            childBack={<CardSvg />}
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
            data={earningCard}
            scrollEnabled={false}
            keyExtractor={item => item.title.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) =>
              item.title === 'Customers per hour' ? (
                <DataTimeVisibleCard
                  key={index}
                  title={item.title}
                  data={item.timeData}
                />
              ) : (
                <View style={styles.storeDataContainer}>
                  <Text style={styles.storeDataTitle}>{item.title}</Text>
                  <Text style={styles.storeDataValue}>{item.value}</Text>
                </View>
              )
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EarningCard;

const data = [
  {label: 'Today', value: 'today'},
  {label: 'Tomorrow', value: 'tomorrow'},
  {label: 'Item 3', value: '3'},
];

const earningCard = [
  {
    title: 'Total paid',
    value: '£352.46',
    type: 'data',
  },
  {title: 'Total revenue', value: '£291.16'},
  {title: 'Customers', value: '246'},
  {title: 'Per customer', value: '£6.21'},
  {
    title: 'Customers per hour',
    timeData: [
      {timeRange: '10AM - 11AM', value: 52},
      {timeRange: '11AM - 12PM', value: 47},
      {timeRange: '12PM - 1PM', value: 40},
    ],
  },
  {title: 'Online bookings', value: '48'},
  {title: 'Card payments', value: '26'},
  {title: 'Cash payments', value: '13'},
  {title: 'In-store payments', value: '05'},
];
