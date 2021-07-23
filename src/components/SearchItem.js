/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchItem = ({ item }) => {
  const isEven = num => {
    return num % 2 === 0 ? true : false;
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isEven(item.id) ? '#ECECEC' : '#D8F2FF',
        },
      ]}>
      <Text>
        {item.title}-{'\n\n'}
      </Text>
      <Text style={styles.bold}>Origin</Text>
      <Text>
        {item.origin.genus}{' '}
        <Text style={styles.italic}>
          {item.origin.epithet}
          {'\n'}
        </Text>
      </Text>
      <Text style={styles.bold}>Meaning</Text>
      <Text>
        {item.meaning}
        {'\n'}
      </Text>
      <Text style={styles.bold}>Examples</Text>
      <View style={styles.example}>
        <Text>{item.examples.join(', ')}</Text>
      </View>
      <Text style={styles.bold}>{'\n'}Notes</Text>
      <Text>{item.notes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 10,
    borderRadius: 5,
  },
  example: {
    flexDirection: 'row',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});

export default SearchItem;
