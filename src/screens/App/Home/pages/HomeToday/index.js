import { FlatList, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ReadyToCheckInList from '../../../../../components/ReadyToCheckInList'
import { styles } from './styles'
import CheckedInList from '../../../../../components/CheckedInList'
import CompeletedList from '../../../../../components/CompeletedList'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch, useAppSelector } from '../../../../../features/user/stateHooks'
import { selectHomeLuggageGetTodayData } from '../../../../../features/user/slices/home_slice'
import { requestHomeLuggageGetTodayDataThunk } from '../../../../../features/user/thunks/home_thunks'

const HomeToday = () => {
  const navigation = useNavigation();

  const dispatch = useAppDispatch();

  const homeLuggageGetTodayData = useAppSelector(selectHomeLuggageGetTodayData);
  console.log('homeLuggageGetTodayData---', homeLuggageGetTodayData);
  
  // Api Call 
  useEffect(() => {
    dispatch(requestHomeLuggageGetTodayDataThunk());
  }, []);

  return (
    <View style = {styles.root}>
      {/* Ready To Check In List */}
      <ReadyToCheckInList
        id={readyToCheckIn.id}
        status={readyToCheckIn.status}
        name={readyToCheckIn.name}
        dropOff={readyToCheckIn.dropOff}
        pickUp={readyToCheckIn.pickUp}
        bags={readyToCheckIn.bags}
        totalAmount={readyToCheckIn.totalAmount}
        days={readyToCheckIn.days}
        orderId={readyToCheckIn.orderId}
        description={readyToCheckIn.description}
        onPress={() => {
          navigation.navigate('BookingScreenStack',{
              screen: 'BookingReadyToCheckIn',
          });
        }}
      />
      {/* Checked In */}
      <FlatList
        scrollEnabled={false}
        data={checkedInData}
        renderItem={({item}) => {
          return (
            <CheckedInList
              id={item.id}
              status={item.status}
              type={item.type}
              name={item.name}
              dropOff={item.dropOff}
              pickUp={item.pickUp}
              bags={item.bags}
              totalAmount={item.totalAmount}
              days={item.days}
              orderId={item.orderId}
              description={item.description}
              onPress={() => {
                navigation.navigate('BookingScreenStack',{
                    screen: 'BookingCheckedIn',
                });
              }}
            />
          )
        }}
      />
      {/* Completed */}
      <CompeletedList
        id={compeletedData.id}
        status={compeletedData.status}
        name={compeletedData.name}
        dropOff={compeletedData.dropOff}
        pickUp={compeletedData.pickUp}
        bags={compeletedData.bags}
        totalAmount={compeletedData.totalAmount}
        days={compeletedData.days}
        orderId={compeletedData.orderId}
        description={compeletedData.description}
      />
    </View>
  )
}

export default HomeToday;

const readyToCheckIn = 
{
  id: 1,
  status: 'READY TO CHECK IN',
  name: 'James Bond Alex',
  dropOff: {
    time: '9.00 AM',
    date: '02/11'
  },
  pickUp: {
    time: '9.00 AM',
    date: '02/11'
  },
  bags: '02',
  totalAmount: '£25.56',
  days: '04',
  orderId: '123456',
  description: 'James completed payment online 12 days ago'
}

const checkedInData = [
  {
    id: 1,
    status: 'CHECKED IN',
    type: 'paidInShop',
    name: 'James Bond',
    dropOff: {
      time: '9.00 AM',
      date: '02/11'
    },
    pickUp: {
      time: '9.00 AM',
      date: '02/11'
    },
    bags: '02',
    totalAmount: '£25.56',
    days: '04',
    orderId: '123456',
    description: 'James completed payment online 12 days ago'
  },
  {
    id: 2,
    status: 'CHECKED IN',
    type: 'paidCash',
    name: 'James Bond',
    dropOff: {
      time: '9.00 AM',
      date: '02/11'
    },
    pickUp: {
      time: '9.00 AM',
      date: '02/11'
    },
    bags: '02',
    totalAmount: '£25.56',
    days: '04',
    orderId: '123456',
    description: 'James completed payment online 12 days ago'
  }
]

const compeletedData =  
{
    id: 1,
    status: 'COMPLETED',
    name: 'James Bond',
    dropOff: {
      time: '9.00 AM',
      date: '02/11'
    },
    pickUp: {
      time: '9.00 AM',
      date: '02/11'
    },
    bags: '02',
    totalAmount: '£25.56',
    days: '04',
    orderId: '123456',
    description: 'James completed payment online 12 days ago'
}
