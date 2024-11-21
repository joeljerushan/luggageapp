import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Render from './render';

const EarningTable = props => {
  const {data} = props;
  return (
    <FlatList
      data={data}
      scrollEnabled={false}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Header />}
      renderItem={({item}) => {
        return (
          <Render
            date={item.date}
            name={item.name}
            status={item.status}
            revenue={item.revenue}
          />
        );
      }}
    />
  );
};

// PropTypes
EarningTable.propTypes = {
  data: PropTypes.array,
};

export default EarningTable;

const styles = StyleSheet.create({});
