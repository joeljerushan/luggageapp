import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {styles} from './styles';
import PropTypes from 'prop-types';

const CustomCalendar = (props) => {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  // State to store selected date, initializing with today
  const [selectedDate, setSelectedDate] = useState(today);

  return (
    <View style={styles.container}>
      <Calendar
        current={today}
        onDayPress={day => {
            setSelectedDate(day.dateString)
            console.log(`Selected date: ${day.dateString}`);
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            // marked: true,
            selectedColor: '#00A1FF', // This sets the background color of the selected date
          },
        }}
        theme={{
          backgroundColor: '#ffffff',
          borderRadius: 10,
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#000',
          todayTextColor: '#000',
          dayTextColor: '#000', // date color
          selectedDayBackgroundColor: '#000',
          selectedDayTextColor: '#ffffff',
          arrowColor: '#D9D9D9', // Color for both left and right arrows
          monthTextColor: '#000',
          textDayFontSize: Platform.OS == 'android' ? 18 : 16,
          textMonthFontSize: Platform.OS == 'android' ? 20 : 18,
          textDayHeaderFontSize: Platform.OS == 'android' ? 16 : 14,
          // New styles for header background
        }}
        style={{
          borderWidth: 2,
          borderColor: '#D9D9D9',
          borderRadius: 10,
        }}
      />
    </View>
  );
};

// Default Props
CustomCalendar.propTypes = {
    
}
export default CustomCalendar;
