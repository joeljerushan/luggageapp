import {
    FlatList,
    SafeAreaView,
    ScrollView,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import TopHeader from '../../../../../components/TopHeader';
  import ImageTitleCard from '../../../../../components/ImageTitleCard';
import { styles } from './styles';
import AddOptionButton from '../../../../../components/Button/AddOptionButton';
  
  const EarningStore02 = () => {
    return (
      <SafeAreaView style={styles.root}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerScroll}>
          <View style={styles.mainContainer}>
            {/* header */}
            <TopHeader 
              title={'Store'} 
            />

            {/* Option Button */}
            <AddOptionButton
              title='All Websites'
              type='bag'
            />
  
            {/* Store Data */}
            <FlatList
              data={userData}
              scrollEnabled={false}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                    <ImageTitleCard
                    imageUri={item.image}
                    title={item.title}
                    description={item.description}
                  />
                );
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default EarningStore02;
  
const userData = [
    {
        id: 1,
        image:
          'https://cdn.telugu360.com/wp-content/uploads/2019/03/Mahesh-Babu-fans-not-happy-with-Sai-Pallavi.jpg',
        title: 'Kings cross',
        description: 'Luggage Storage',
    },
    {
        id: 2,
        image:
          'https://cdn.telugu360.com/wp-content/uploads/2019/03/Mahesh-Babu-fans-not-happy-with-Sai-Pallavi.jpg',
        title: 'Kings cross',
        description: 'Luggage Storage',
    },
    {
        id: 3,
        image:
          'https://cdn.telugu360.com/wp-content/uploads/2019/03/Mahesh-Babu-fans-not-happy-with-Sai-Pallavi.jpg',
        title: 'Kings cross',
        description: 'Luggage Storage',
    },
    {
        id: 4,
        image:
          'https://cdn.telugu360.com/wp-content/uploads/2019/03/Mahesh-Babu-fans-not-happy-with-Sai-Pallavi.jpg',
        title: 'Kings cross',
        description: 'Luggage Storage',
    },
    {
        id: 5,
        image:
          'https://cdn.telugu360.com/wp-content/uploads/2019/03/Mahesh-Babu-fans-not-happy-with-Sai-Pallavi.jpg',
        title: 'Kings cross',
        description: 'Luggage Storage',
    },
    {
        id: 6,
        image:
          'https://cdn.telugu360.com/wp-content/uploads/2019/03/Mahesh-Babu-fans-not-happy-with-Sai-Pallavi.jpg',
        title: 'Kings cross',
        description: 'Luggage Storage',
    }
]
  