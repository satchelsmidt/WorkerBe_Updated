import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

import { Block, theme } from 'galio-framework';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('screen');

// ADD SCROLL FUNCTIONALITY... to scroll to end
///// (most recent message if more than available in view.

// Defined Variables
const messageOther = 'I had a chance to look at your progress, and you are doing a great job so far!';
const messageOwner = `Thanks! (: That means a lot! It's been pretty stressful actually - so glad to see it's paying off!`;

// Images


// Functions


function MessagingChild() {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Block style={{flex: 1, justifyContent: 'flex-end'}}>
        <ScrollView>
          <Block style={styles.cardsContainer}>
            <Block style={styles.otherCard}>
              <Text>{messageOther}</Text>
            </Block>
            <Block style={styles.ownerCard}>
                <Text>{messageOwner}</Text>
            </Block>
            <Block style={styles.otherCard}>
              <Text>What's been stressful? We need to make sure everything is sustainable.</Text>
            </Block>
          </Block>
        </ScrollView>
        <Block style={styles.bottomBar}>
          <TextInput
            placeholder='Type message...'
            placeholderTextColor='black'
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => alert('Clicked Send!')}
          >
            <Ionicons
              name={'ios-arrow-round-up'}
              size={35}
              color={'gray'}
            />
          </TouchableOpacity>
        </Block>
        <Block style={{flex: 0.37}} />
      </Block>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height
  },
  cardsContainer: {
    // marginBottom: 25,
  },
  bottomBar: {
    marginTop: -100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
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
  otherCard: {
    width: width * 0.75,
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    marginTop: 25,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  ownerCard: {
    alignSelf: 'flex-end',
    width: width * 0.75,
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    marginTop: 25,
    backgroundColor: 'lightblue',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  }
});

export default MessagingChild;
