import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

export const MenuOption = ({imageUrl, text}) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemWrapper}>
        <Image style={styles.image} source={imageUrl} />
      </View>
      <Text>{text}</Text>
    </View>
  );
};
