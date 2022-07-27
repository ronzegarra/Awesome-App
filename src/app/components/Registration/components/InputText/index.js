import React from 'react';

import {View, TextInput, Image} from 'react-native';
import styles from './styles';

export const InputText = ({imgUrl, placeholder, type, handleFields}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.tinyLogo} source={imgUrl} />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={type == 'user' ? false : true}
        onChangeText={value => handleFields(type, value)}
      />
    </View>
  );
};
