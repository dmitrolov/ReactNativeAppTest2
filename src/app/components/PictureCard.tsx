import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, View, Text } from 'react-native';
import { onSearchSubmit } from '../api/unsplash';

interface PictureCardProps {
  pictureUrl: string;
}

const PictureCard = (props: PictureCardProps) => {

  return (
    <View style={ styles.pictureCard }>
      <Image style={ {
        width: 200,
        height: 200,
        borderWidth: 1
      } } source={ { uri: props.pictureUrl } } />
    </View>
  );
};

const styles = StyleSheet.create({
  pictureCard: {
    paddingTop: 16
  }
});

export default PictureCard;
