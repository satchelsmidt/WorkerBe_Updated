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

// Defined Variables


// Images


// Functions


function NewMessage() {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Block style={{flex: 1, justifyContent: 'flex-end'}}>
        <Block style={styles.cardsContainer}>
          <Block style={styles.topBar}>
            <TextInput
              placeholder='To:'
              placeholderTextColor='black'
              style={styles.topBarInput}
            />
          </Block>
        </Block>
        <Block style={styles.bottomBar}>
          <TextInput
            placeholder='Type message...'
            placeholderTextColor='black'
            style={styles.bottomBarInput}
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
    flex: 1,
    marginBottom: 25
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  topBarInput: {
    height: 35,
    width: width * 0.9,
    backgroundColor: 'lightgray',
    borderRadius: 6,
    paddingHorizontal: 10,
    color: 'black'
  },
  bottomBar: {
    marginTop: 165,
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
  bottomBarInput: {
    height: 35,
    width: width * 0.8,
    backgroundColor: 'lightgray',
    borderRadius: 6,
    paddingHorizontal: 10,
    color: 'black'
  }
});

export default NewMessage;
