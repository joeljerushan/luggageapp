import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AdminReadyToCheckInList from '../../../../adminComponent/AminReadyToCheckInList';
import AdminCheckedInList from '../../../../adminComponent/AdminCheckedInList';
import AdminCompeletedList from '../../../../adminComponent/AdminCompeletedList';
import { styles } from './styles';

const HomeAdminPast = () => {
  const navigation = useNavigation();
  return (
    <View style = {styles.root}>
      {/* Ready To Check In List */}
      <AdminReadyToCheckInList
        id={readyToCheckIn.id}
        shopTitle={readyToCheckIn.shopTitle}
        status={readyToCheckIn.status}
        name={readyToCheckIn.name}
        dropOff={readyToCheckIn.dropOff}
        pickUp={readyToCheckIn.pickUp}
        bags={readyToCheckIn.bags}
        totalAmount={readyToCheckIn.totalAmount}
        days={readyToCheckIn.days}
        orderId={readyToCheckIn.orderId}
        description={readyToCheckIn.description}
        disabled
      />
      {/* Checked In */}
      <FlatList
        data={checkedInData}
        renderItem={({item}) => {
          return (
            <AdminCheckedInList
              id={item.id}
              shopTitle={item.shopTitle}
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
              disabled
            />
          )
        }}
      />
      {/* Completed */}
      <AdminCompeletedList
        id={compeletedData.id}
        shopTitle={compeletedData.shopTitle}
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

export default HomeAdminPast;

const readyToCheckIn = 
{
  id: 1,
  shopTitle: 'Kings cross luggage storage',
  status: 'READY TO CHECK IN',
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

const checkedInData = [
  {
    id: 1,
    shopTitle: 'Kings cross luggage storage',
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
    shopTitle: 'Kings cross luggage storage',
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
    shopTitle: 'Kings cross luggage storage',
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
