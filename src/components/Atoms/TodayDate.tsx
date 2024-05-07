import {StyleSheet, Text} from 'react-native';
import React from 'react';

const TodayDate = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {weekday: 'long'};
  const dayName = date.toLocaleDateString('en-US', options);
  const today = date.getDate();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = monthNames[date.getMonth()];

  return (
    <>
      <Text style={styles.text}>
        {dayName}, {month} {today}
      </Text>
    </>
  );
};

export default TodayDate;

const styles = StyleSheet.create({
  text: {
    color: '#E5E7EB',
    fontSize: 17,
  },
});
