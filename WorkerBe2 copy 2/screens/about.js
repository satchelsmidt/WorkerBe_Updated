import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';

import { Block, theme } from 'galio-framework';
import { Images } from '../constants';

const { width, height } = Dimensions.get('screen');

// Defined Variables
const workerBeURL = 'https://workerbe.io/personal-board-defined/';

// Images
const background = Images.MainBackground;
const logo = Images.Logo;

// Functions
const loadInBrowser = (url) => {
    Linking.openURL(url).catch(err => console.error(`Couldn't load page`, err));
  };

function About() {
  return (
    <Block flex middle>
      <ImageBackground
        source={background}
        style={{ width, height }}
      >
        <Block flex middle>
          <Block style={styles.container}>
            <Block style={styles.header}>
              <Image
                source={logo}
                style={styles.logo}
              />
              <Text style={styles.headerText}>
                We Empower People
              </Text>
              <Text style={styles.headerText2}>
                to Achieve Their Goals
              </Text>
            </Block>
            <Block flex style={{marginTop: 10, marginBottom: 10}}>
              <Block style={styles.card}>
                <Text style={styles.cardText}>
                  Our mission is to empower every person to have a growth mindset and find fulfillment in their career.
                </Text>
              </Block>
              <Block style={styles.card}>
                <Text style={styles.cardText}>
                  Many people do what they think they are 'supposed' to do. We aspire to break from that narrative.
                </Text>
              </Block>
              <Block style={styles.card}>
                <Text style={styles.cardText}>
                  WorkerBe provides you with a dedicated space to create a Personal Board of Directors to provide accountability on your professional journey.
                </Text>
              </Block>
              <Block middle>
                <TouchableOpacity
                  onPress={() => loadInBrowser(workerBeURL)}
                >
                  <Block style={styles.button}>
                    <Text style={styles.buttonText}>
                      Learn More
                    </Text>
                  </Block>
                </TouchableOpacity>
              </Block>
            </Block>
          </Block>
        </Block>
      </ImageBackground>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height * 0.65,
    backgroundColor: '#F4F5F7',
    borderRadius: 8,
    shadowColor: theme.COLORS.BLACK,
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
  header: {
    flex: 0.5,
    alignItems: 'center',
    backgroundColor: theme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#8898AA',
    paddingBottom: 25,
  },
  logo: {
    flex: 1,
    width: '80%',
    resizeMode: 'contain',
    marginTop: 20
  },
  headerText: {
    color: theme.COLORS.BLACK,
    fontSize: 21,
    fontWeight: '700',
  },
  headerText2: {
    color: theme.COLORS.BLACK,
    fontSize: 18,
    fontWeight: '700',
  },
  card: {
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 25,
  },
  cardText: {
    color: theme.COLORS.BLACK,
    fontSize: 15,
    fontWeight: '600'
},
  button: {
    alignItems: 'center',
    width: width * 0.5,
    padding: theme.SIZES.BASE,
    borderRadius: 8,
    marginTop: 25,
    backgroundColor: '#E1B80D',
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOpacity: 0.2,
  },
  buttonText: {
    color: theme.COLORS.WHITE,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default About;
