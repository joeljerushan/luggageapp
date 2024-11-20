import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {styles} from './styles';
import HomeHeader from '../../../../../components/HomeHeader';
import TabButton from '../../../../../components/TabButton';
import ReadyToCheckInList from '../../../../../components/ReadyToCheckInList';
import HomeToday from '../HomeToday';
import HomeUpComing from '../HomeUpcoming';
import HomePast from '../HomePast';

const HomeKingsCrossLuggage = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('today');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    console.log(`Active Tab: ${tab}`);
    // Additional logic for each tab can be added here
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          {/* Header */}
          <HomeHeader
            title="Kings cross Luggage"
            onPressSearch={() => {}}
            onPressScanQr={() => {}}
          />
          <TouchableOpacity onPress={() => navigation.navigate('HomeBooking')}>
          </TouchableOpacity>
          {/* Gray View */}
          <View style={styles.grayView}>

          </View>
          {/* Tab Button */}
          <TabButton
            activeTab={activeTab}
            onTabPress={handleTabPress}
          />
          {/* Ready To Check In List */}
          {/* <ReadyToCheckInList/> */}
        </View>

        {/* Active Tab */}
        {activeTab === 'today' && (
          <HomeToday/>
        )}
        {activeTab === 'upcoming' && (
          <HomeUpComing/>
        )}
        {activeTab === 'past' && (
          <HomePast/>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeKingsCrossLuggage;
