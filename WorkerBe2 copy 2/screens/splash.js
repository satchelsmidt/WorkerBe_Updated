import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';

import { Images } from '../constants';
import { Block } from 'galio-framework';

// Defined Variables


// Images
const logo = Images.Logo;

// Functions


function Splash() {
  return (
    <Block style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image
      source={logo}
      style={styles.logo}
    />
    </Block>
  );
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    width: '80%',
    resizeMode: 'contain',
    alignSelf: 'center',
  }
});

export default Splash;
