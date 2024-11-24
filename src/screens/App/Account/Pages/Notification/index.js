import {
  FlatList,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import React from 'react';
import BackArrow from '@/assets/icons/ArrowSquareLeft-Linear.svg';
import TopHeader from '../../../../../components/TopHeader';
import NotificationCard from '../../../../../components/NotificationCard';
import { styles } from './styles';

const Notifications = ({navigation}) => {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerScroll}>
        <View style={styles.mainContainer}>
          {/* header */}
          <TopHeader 
            title={'Notifications'} 
            childFront={<BackArrow />} 
            onPressLeft={() => navigation.goBack()}
          />
          {/* Notification */}
          <FlatList
            data={data}
            scrollEnabled={false}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
            renderItem={({item}) => {
              return (
                <NotificationCard id={item.id} description={item.description} />
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;

const data = [
  {
    id: 1,
    description: 'James Bond placed an order for 2 bags. Paid £10.00',
  },
  {
    id: 2,
    description: 'James Bond placed an order for 2 bags. Paid £10.00',
  },
  {
    id: 3,
    description: 'James Bond placed an order for 2 bags. Paid £10.00',
  },
  {
    id: 4,
    description: 'James Bond placed an order for 2 bags. Paid £10.00',
  },
  {
    id: 5,
    description: 'James Bond placed an order for 2 bags. Paid £10.00',
  },
];
