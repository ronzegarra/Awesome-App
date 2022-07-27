import React, {useState} from 'react';

import {Text, View, Image, TouchableOpacity} from 'react-native';

import {MenuOption} from './components/MenuOption';
import {Accordion} from './components/Accordion'

import styles from './styles';

export const Home = () => {

  return (
    <View style={styles.homeWrapper}>
      <View style={{marginTop: 25}}>
        <Text>Pantalla de Home</Text>
      </View>
      <View style={{marginTop: 25, marginBottom: 15}}>
        <Text>Opciones</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <MenuOption
          imageUrl={require('../../assets/images/coche.png')}
          text={'Carrito'}
        />
        <MenuOption
          imageUrl={require('../../assets/images/bolsas.png')}
          text={'Compras'}
        />
        <MenuOption
          imageUrl={require('../../assets/images/mascarilla.png')}
          text={'Salud'}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <MenuOption
          imageUrl={require('../../assets/images/globo.png')}
          text={'Aniversario'}
        />
        <MenuOption
          imageUrl={require('../../assets/images/mano.png')}
          text={'WhatsApp'}
        />
        <MenuOption
          imageUrl={require('../../assets/images/caja.png')}
          text={'Envio'}
        />
      </View>

      <Accordion/>

   
    </View>
  );
};
