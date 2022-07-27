import Modal from 'react-native-modal';

import {Text, View, TouchableOpacity, Alert} from 'react-native';

import {database} from '../../../../src/config/firebase';

import {collection, addDoc} from 'firebase/firestore';

import React, {useState} from 'react';
import styles from './styles';
import {InputText} from './components/InputText';

export const Registration = ({showRegistry, goRegister}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleFields = (type, value) => {
    if (type === 'user') {
      setUser(value);
    } else {
      setPassword(value);
    }
  };

  const localRegister = async user => {
    const newItem = {
      user,
      password,
    };

    await addDoc(collection(database, 'users'), newItem);

    Alert.alert('Genial!', 'Usuario registrado correctamente');

    goRegister(false);
  };

  const cancelRegister = () => {
    goRegister();
  };

  return (
    <Modal style={styles.registerWrapper} isVisible={showRegistry}>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>REGISTRARME</Text>
      </View>

      <View>
        <InputText
          imgUrl={require('../../assets/icons/account.png')}
          placeholder="Usuario"
          type="user"
          handleFields={handleFields}
          user={user}
        />

        <InputText
          imgUrl={require('../../assets/icons/lock.png')}
          placeholder="Contraseña"
          type="password"
          handleFields={handleFields}
          password={password}
        />

        <InputText
          imgUrl={require('../../assets/icons/lock.png')}
          placeholder="Confirmar contraseña"
          type="password"
          handleFields={handleFields}
          password={password}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => localRegister(user, password)}>
          <Text style={{color: 'white'}}> Registrar </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cancelButton}>
        <TouchableOpacity onPress={() => cancelRegister()}>
          <Text style={styles.cancelText}> Cancelar </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
