import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';

import { Block, theme } from 'galio-framework';
import { Images } from '../constants';

const { width, height } = Dimensions.get('screen');

// Defined Variables
const emailTo = 'mailto:matthew@workerbe.io';

// Images
const background = Images.MainBackground;
const contactHeader = Images.ContactHeader;

// Functions
const loadInBrowser = (url) => {
    Linking.openURL(url).catch(err => console.error(`Couldn't load page`, err));
  };

function ContactUs() {
  return (
    <Block flex middle>
      <ImageBackground
        source={background}
        style={{ width, height }}
      >
        <Block style={styles.container}>
          <Block>
            <Block style={styles.card}>
              <Image
                source={contactHeader}
                style={styles.contactHeader}
              />
              <Block>
                <Text style={styles.cardTextHeader}>
                  We would love to get in touch.
                </Text>
              </Block>
              <TouchableOpacity
                onPress={() => loadInBrowser(emailTo)}
              >
                <Block middle style={styles.button}>
                  <Text style={{color: theme.COLORS.WHITE, fontSize: 20, fontWeight: '600'}}>
                    Send us an Email
                  </Text>
                </Block>
              </TouchableOpacity>
            </Block>
          </Block>
        </Block>
      </ImageBackground>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    justifyContent: 'center',
  },
  card: {
    height: height * 0.5,
    alignItems: 'center',
    padding: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
    marginHorizontal: theme.SIZES.BASE,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  contactHeader: {
    height: '30%',
    width: '95%',
    borderRadius: 8,
    marginTop: 10
  },
  cardTextHeader: {
    fontSize: 40,
    fontWeight: '700',
    marginTop: 25
  },
  button: {
    width: width * 0.5,
    padding: theme.SIZES.BASE,
    borderRadius: 8,
    marginTop: 40,
    backgroundColor: '#E1B80D',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  }
});

export default ContactUs;
