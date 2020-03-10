import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { onSearchSubmit, PictureData } from '../api/unsplash';
import PictureCard from '../components/PictureCard';

interface HomeState {
  searchText: string;
  searchResults: PictureData[],
}

const Home = () => {
  const [state, setState] = useState<HomeState>({
    searchText: '',
    searchResults: []
  });

  const onSubmitSearch = (text: string) => {
    onSearchSubmit(text || 'popular')
    .then(((response) => setState({ ...state, searchResults: response.data.results })));
  };

  useEffect(() => {
    onSubmitSearch('popular');
  }, []);

  return (
    <>
      <TextInput
        style={ styles.searchInput }
        onChangeText={ (text: string) => setState({ ...state, searchText: text }) }
        value={ state.searchText }
        onSubmitEditing={ () => onSubmitSearch(state.searchText) }
        placeholder={ 'type here to search images' }
      />
      <ScrollView style={ { borderWidth: 1, margin: 12 } }>
        <View style={ styles.container }>
          { state.searchResults.length !== 0
            ? state.searchResults.map((result) => {
              return <PictureCard key={ result.id } pictureUrl={ result.urls.small } />;
            })
            : <Text>no results found</Text> }
        </View>

      </ScrollView>
    </>
  );

};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  searchInput: {
    height: 40,
    margin: 12,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 40
  }
});

export default Home;
