/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Header from './Header';
import SearchItem from './SearchItem';

const SearchResults = ({ route }) => {
  const { searchTerm } = route.params;
  const navigation = useNavigation();

  const [searchData, setSearchData] = useState([]);

  // add doc to firestore "doc" collection
  const addData = async () => {
    let obj = {
      id: 4,
      title: 'antic',
      origin: {
        genus: 'Kasen',
        epithet: 'Geek',
      },
      meaning: 'ajsdoaj asdlkasd asdklasdm',
      examples: ['asdasd', 'asdasd', 'adadasd', 'asdasdasd'],
      notes: 'asdasdasdasdasd dfas dfdsf asasdad',
    };

    await firestore()
      .collection('docs')
      .add(obj)
      .then(() => {
        console.log('User added!');
      });
  };

  // get doc from firestore "doc" collection
  const getData = async () => {
    let data = [];
    await firestore()
      .collection('docs')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          data.push(documentSnapshot.data());
        });
      });
    return data;
  };

  const searchStringInArray = (array, searchString) => {
    let filteredArray = [];
    for (let i = 0; i < array?.length; i++) {
      if (array[i].title.match(searchString)) {
        filteredArray.push(array[i]);
      }
    }
    return filteredArray;
  };

  useEffect(async () => {
    const res = await getData();
    setSearchData(searchStringInArray(res, searchTerm));
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
