import React, {useState} from 'react';
import styles from './styles';

import {Text, View, Image, TouchableOpacity} from 'react-native';

const text =
  ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con lacreación de las hojas  las cuales contenian pasajes..';

export const Accordion = () => {
  const [showAccordion, setShowAccordion] = useState(true);

  const openText = () => {
    setShowAccordion(!showAccordion);
  };

  return (
    <View style={{flexDirection: 'column', marginTop: 30}}>
      <TouchableOpacity
        onPress={() => openText()}
        style={styles.accordionWrapper}>
        <Text style={styles.titleText}>Descubre</Text>
        <Image
          style={styles.imageIcon}
          source={
            showAccordion
              ? require('../../../../assets/images/open.png')
              : require('../../../../assets/images/close.png')
          }
        />
      </TouchableOpacity>
      {showAccordion ? (
        <View style={styles.contentText}>
          <Text>{text}</Text>
        </View>
      ) : null}
    </View>
  );
};
