import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface PictureCardProps {
  pictureUrl: string;
}

const PictureCard = (props: PictureCardProps) => {
  return (
    <View style={ styles.pictureCard }>
      <Image style={ {
        width: 150,
        height: 150,
        borderWidth: 1
      } } source={ { uri: props.pictureUrl || 'src/assets/no-image.svg' } } />
    </View>
  );
};

const styles = StyleSheet.create({
  pictureCard: {
    paddingTop: 16,
    borderWidth: 1,
    borderColor: 'red'
  }
});

export default PictureCard;
