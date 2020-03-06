import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { onSearchSubmit } from '../api/unsplash';
import PictureCard from '../components/PictureCard';

const Home = () => {
  const [state, setState] = useState([{
    urls: {
      full: '',
      small: ''
    }
  }]);

  useEffect(() => {
    onSearchSubmit('space')
    .then(((response) => {
      setState(response.data.results);
    }));

  }, []);

  return (
    <ScrollView>
      {state.map((result) => {
        return <PictureCard pictureUrl={ result.urls.small } />
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Home;
