import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CalendarSvg from '@/assets/icons/Calendar1-Outline.svg'
import { styles } from './styles'
import PropTypes from 'prop-types';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

const DatePicker = (props) => {
    const {
        onSelectDate,
        minimumDate,
        maximumDate,
        defaultDate,
        style,
        placeholder,
    } = props
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectDate, setSelectDate] = useState(
      defaultDate ? new Date(defaultDate) : undefined
    );

    const handleConfirm = (date) => {
      setSelectDate(date);
      onSelectDate && onSelectDate(date);
      setDatePickerVisibility(false);
    }

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    }
  return (
    <View style={[styles.container,style]}>
      <TouchableOpacity
        style={styles.calendaerContainer}
        activeOpacity={0.5}
        onPress={showDatePicker}
      >
        <CalendarSvg/>

        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        display="inline"
        date={selectDate}
        onConfirm={handleConfirm}
        onCancel={() => setDatePickerVisibility(false)}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
      />

      </TouchableOpacity>
    </View>
  )
}

// Default Props
DatePicker.propTypes = {
  style: PropTypes.object,
  placeholder: PropTypes.string,
  defaultDate: PropTypes.instanceOf(Date),  // defaultDate should be a Date object
  minimumDate: PropTypes.instanceOf(Date),  // minimumDate should be a Date object
  maximumDate: PropTypes.instanceOf(Date),  // maximumDate should be a Date object
  onSelectDate: PropTypes.func,
};

export default DatePicker;