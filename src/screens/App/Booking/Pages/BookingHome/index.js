import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import TopHeader from '../../../../../components/TopHeader';
import Calendar from '@/assets/icons/Calendar.svg';
import BookingTabButton from '../../../../../components/BookingTabButton';
import BookingReady from './BookingReady';
import BookingExpired from './BookingExpired';
import SearchInput from '../../../../../components/Input/SearchInput';

const BookingHome = ({navigation}) => {
    const [search, setSearch] = useState('');
    const [activeTab, setActiveTab] = useState('ready');

    const handleTabPress = (tab) => {
      setActiveTab(tab);
      console.log(`Active Tab: ${tab}`);
      // Additional logic for each tab can be added here
    }

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.mainContainer}>
            {/* Top Header */}
            <TopHeader
              title={'Bookings'}
              childBack={<Calendar/>}
              onPressRight={() => {
                navigation.navigate('BookingCalendar')
              }}
            />

            {/* Search */}
            <SearchInput
              value={search}
              placeholder={'Search...'}
              onChangeText={(text) => setSearch(text)}
            />

            {/* Tab Button */}
            <BookingTabButton
              leftTabNumber={'12'}
              middleTabNumber={'98'}
              rightTabNumber={'56'}
              activeTab={activeTab}
              onTabPress={handleTabPress}
            />

            {/* Reday To Check In */}
        </View>

        {/* active screen */}
        {activeTab === 'ready' && (<BookingReady/>)}
        {activeTab === 'checked' && (<Text>Checked</Text>)}
        {activeTab === 'expired' && (<BookingExpired/>)}
      </ScrollView>
    </SafeAreaView>
  )
}

export default BookingHome;