import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackArrow from '@/assets/icons/ArrowSquareLeft-Linear.svg';
import TopHeader from '../../../../../components/TopHeader';
import { styles } from './styles';
import BillingCard from '../../../../../components/BillingCard';

const Billing = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerScroll}
      >
        <View style={styles.mainContainer}>
            {/* header */}
            <TopHeader 
              title={'Billing'} 
              childFront={<BackArrow />}
            />
            {/* Billing */}
            <FlatList
              data={data}
              scrollEnabled={false}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}
              renderItem={({item}) => {
                return (
                  <BillingCard
                    id={item.id}
                    date={item.data}
                    amount={item.amount}
                    reference={item.reference}
                    status={item.status}
                    description={item.description}
                  />
                );
              }}
            />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Billing;

const data = [
    {
        id: 1,
        data: '05/11/2023',
        amount: '£25.56',
        reference: '123456789',
        status: 'Pending',
        description: 'Balance transferred via Stripe',
    },
    {
        id: 2,
        data: '05/11/2023',
        amount: '£25.56',
        reference: '123456789',
        status: 'Pending',
        description: 'Balance transferred via Stripe',
    },
    {
        id: 3,
        data: '05/11/2023',
        amount: '£25.56',
        reference: '123456789',
        status: 'Pending',
        description: 'Balance transferred via Stripe',
    }
]