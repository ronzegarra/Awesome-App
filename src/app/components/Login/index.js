import Modal from 'react-native-modal';

import {Text, View, TouchableOpacity} from 'react-native';

import React, {useState} from 'react';
import styles from './styles';
import {InputText} from './components/InputText';

export const Login = ({showModal, goLogin, goRegister}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleFields = (type, value) => {
    if (type === 'user') {
      setUser(value);
    } else {
      setPassword(value);
    }
  };

  const localLogin = (user, password) => {
  

    goLogin(user, password);
  };

  const localRegister = () => {
    goRegister(true);
  };

  return (
    <Modal style={styles.loginWrapper} isVisible={showModal}>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>INICIAR SESIÓN</Text>
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
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => localLogin(user, password)}>
          <Text style={styles.textButton}> INGRESAR </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.registerButton}>
        <TouchableOpacity onPress={() => localRegister()}>
          <Text style={styles.registerButtonText}> Registrarme </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
