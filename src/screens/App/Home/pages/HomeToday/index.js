import { FlatList, Text, View } from 'react-native'
import React from 'react'
import ReadyToCheckInList from '../../../../../components/ReadyToCheckInList'
import { styles } from './styles'
import CheckedInList from '../../../../../components/CheckedInList'
import CompeletedList from '../../../../../components/CompeletedList'

const HomeToday = () => {
  return (
    <View style = {styles.root}>
      {/* Ready To Check In List */}
      <ReadyToCheckInList
        status={readyToCheckIn.status}
        name={readyToCheckIn.name}
        dropOff={readyToCheckIn.dropOff}
        pickUp={readyToCheckIn.pickUp}
        bags={readyToCheckIn.bags}
        totalAmount={readyToCheckIn.totalAmount}
        days={readyToCheckIn.days}
        orderId={readyToCheckIn.orderId}
        description={readyToCheckIn.description}
      />
      {/* Checked In */}
      <FlatList
        data={checkedInData}
        renderItem={({item}) => {
          return (
            <CheckedInList
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
            />
          )
        }}
      />
      {/* Completed */}
      <CompeletedList
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

const readyToCheckIn = {
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

const compeletedData = {
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
