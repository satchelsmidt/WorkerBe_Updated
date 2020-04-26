import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

import { Block, theme } from 'galio-framework';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../constants';

const { width, height } = Dimensions.get('screen');

// Defined Variables
const messageFrom = 'Kris Moon';
const messageTime = '15 minutes ago';
const messageExcerpt = 'I had a chance to look at your progress, and...';

// Images
const profilePicture = Images.PersonPic;

// Functions


function Messaging({ navigation }) {
  return (
    <Block style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow:1}}
      >
        <Block style={styles.cardsContainer}>
          <Block style={styles.topBar}>
            <TextInput
              placeholder='Search'
              placeholderTextColor='black'
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => navigation.push('New Message')}
            >
              <Ionicons
                name={'ios-create'}
                size={25}
                color={'gray'}
              />
            </TouchableOpacity>
          </Block>
          <TouchableOpacity
            onPress={() => navigation.push('Contact')}
          >
            <Block style={styles.card}>
              <Block style={styles.cardImageContainer}>
                <Image
                  source={profilePicture}
                  style={styles.cardImage}
                />
              </Block>
              <Block style={styles.cardText}>
                <Block style={styles.cardTextHeader}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 17}}
                  >{messageFrom}</Text>
                  <Text>{messageTime}</Text>
                </Block>
                <Block style={styles.cardTextContent}>
                  <Text>{messageExcerpt}</Text>
                </Block>
              </Block>
            </Block>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push('Contact')}
          >
            <Block style={styles.card}>
              <Block style={styles.cardImageContainer}>
                <Image
                  source={Images.PersonPic2}
                  style={styles.cardImage}
                />
              </Block>
              <Block style={styles.cardText}>
                <Block style={styles.cardTextHeader}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 17}}
                  >Jenna Harding</Text>
                  <Text>1 hour ago</Text>
                </Block>
                <Block style={styles.cardTextContent}>
                  <Text>Let's set up a time to chat!</Text>
                </Block>
              </Block>
            </Block>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push('Contact')}
          >
            <Block style={styles.card}>
              <Block style={styles.cardImageContainer}>
                <Image
                  source={Images.PersonPic3}
                  style={styles.cardImage}
                />
              </Block>
              <Block style={styles.cardText}>
                <Block style={styles.cardTextHeader}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 17}}
                  >Tania Sun</Text>
                  <Text>2 days ago</Text>
                </Block>
                <Block style={styles.cardTextContent}>
                  <Text>Great job with the first step, here are my...</Text>
                </Block>
              </Block>
            </Block>
          </TouchableOpacity>
        </Block>
      </ScrollView>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height - 172,
  },
  cardsContainer: {
    marginBottom: 25
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  input: {
    height: 35,
    width: width * 0.8,
    backgroundColor: 'lightgray',
    borderRadius: 6,
    paddingHorizontal: 10,
    color: 'black'
  },
  card: {
    flexDirection: 'row',
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    borderRadius: 8,
    marginTop: 25,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  cardImageContainer: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    marginRight: 5
  },
  cardImage: {
    height: 45,
    width: 45,
    borderRadius: 45
  },
  cardText: {
    flex: 1,
  },
  cardTextHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default Messaging;
