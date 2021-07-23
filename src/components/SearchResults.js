/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import SearchItem from './SearchItem';

import { data } from '../constants';

const SearchResults = ({ route }) => {
  const { searchTerm } = route.params;
  const navigation = useNavigation();

  const [searchData, setSearchData] = useState([]);

  const searchStringInArray = (array, searchString) => {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].title.match(searchString)) {
        filteredArray.push(array[i]);
      }
    }
    return filteredArray;
  };

  useEffect(() => {
    setSearchData(searchStringInArray(data, searchTerm));
    navigation.setOptions({ title: <Header title={searchTerm} /> });
  }, [searchTerm]);

  return (
    <ScrollView>
      {searchData.map(item => (
        <SearchItem key={item.id} item={item} />
      ))}
    </ScrollView>
  );
};

export default SearchResults;
