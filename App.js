/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, useColorScheme, View, Alert} from 'react-native';
import {database} from './src/config/firebase';
import {collection, query, onSnapshot, orderBy} from 'firebase/firestore';

import {Home} from './src/app/components/Home';
import {Registration} from './src/app/components/Registration';
import {Login} from './src/app/components/Login';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [showModal, setShowModal] = useState(true);
  const [showHome, setShowHome] = useState(false);
  const [showRegistry, setShowRegistry] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const collectionRef = collection(database, 'users');
    const q = query(collectionRef, orderBy('user', 'desc'));
    const unsuscribe = onSnapshot(q, querySnapshot => {
      setUsers(
        querySnapshot.docs.map(doc => ({
          user: doc.data().user,
          password: doc.data().password,
        })),
      );
    });
    return unsuscribe;
  }, []);

  const goRegister = parameter => {
    if (parameter == false) setShowModal(true);
    setShowRegistry(parameter);
  };
  const goLogin = (user, password) => {
    const userRegistered = users.find(item => item.user === user);
    const passwordRegistered = users.find(item => item.password === password);

    if (userRegistered !== undefined && passwordRegistered !== undefined) {
      setShowModal(false);
      setShowHome(true);
    } else {
      Alert.alert('Upps', 'Usuario incorrecto - revise usuario y/o contraseña');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Login showModal={showModal} goLogin={goLogin} goRegister={goRegister} />

      <Registration showRegistry={showRegistry} goRegister={goRegister} />

      {showHome && <Home />}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
});
export default App;
