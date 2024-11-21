import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import PropTypes from 'prop-types';

const BillingCard = props => {
  const {id, date, amount, reference, status, description} = props;
  return (
    <View style={styles.container}>
      {/* data */}
      <View style={styles.dataContainer} key={id}>
        {/* rowContainer- ----- 1 */}
        <View style={styles.rowContainer}>
          {/* Date */}
          <View style={styles.commonContainer}>
            <Text style={styles.dataTitle}>{'Date'}</Text>
            <Text style={styles.dateText}>{date}</Text>
          </View>
          {/* Aoumnt */}
          <View style={styles.commonContainer}>
            <Text style={styles.dataTitle}>{'Amount'}</Text>
            <Text style={styles.dateText}>{amount}</Text>
          </View>
        </View>
        {/* rowContainer ---- 2 */}
        <View style={styles.rowContainer}>
          {/* Reference */}
          <View style={styles.commonContainer}>
            <Text style={styles.dataTitle}>{'Reference'}</Text>
            <Text style={styles.dateText}>{reference}</Text>
          </View>
          {/* Status */}
          <View style={styles.commonContainer}>
            <Text style={styles.dataTitle}>{'Status'}</Text>
            <Text style={styles.dateText}>{status}</Text>
          </View>
        </View>
        {/* rowContainer ---- 3 */}
        <View style={styles.rowContainer}>
          {/* Description */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.dataTitle}>{'Description'}</Text>
            <Text style={styles.dateText}>{description}</Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.buttonContainer}>
          {/* view */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => {}}>
            <Text style={styles.buttonText}>{'View'}</Text>
          </TouchableOpacity>
          {/* download */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => {}}>
            <Text style={styles.buttonText}>{'Download'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Define Type Props
BillingCard.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BillingCard;
