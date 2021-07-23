/* eslint-disable no-alert */
import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements';

const Search = ({ navigation }) => {
  const [term, setTerm] = useState('');

  const handleSearch = () => {
    if (!term.trim()) {
      alert('Search term can not be empty!');
      return;
    }
    this.textInput.clear();
    setTerm('');
    navigation.navigate('SearchResults', { searchTerm: term });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon
          style={styles.searchIcon}
          name="search"
          size={24}
          color="lightgray"
        />
        <TextInput
          ref={input => {
            this.textInput = input;
          }}
          autoCapitalize="none"
          placeholder="Enter the root word to search"
          onChangeText={value => setTerm(value)}
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={() => handleSearch()} style={styles.button}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    textAlign: 'left',
    height: 40,
    width: 220,
  },
  button: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#039be5',
    padding: 10,
    width: 150,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'lightgray',
    borderRadius: 5,
  },
  searchIcon: {
    padding: 10,
  },
});

export default Search;
