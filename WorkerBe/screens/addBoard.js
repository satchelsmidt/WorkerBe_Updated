import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

import { Block, theme } from 'galio-framework';
import { Images } from '../constants';

const { width, height } = Dimensions.get('screen');

// Defined Variables


// Images
const background = Images.MainBackground;

// Functions


function AddBoard() {
  return (
    <Block flex middle>
      <ImageBackground
        source={background}
        style={{ width, height }}
      >
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <Block>
            <Block style={styles.card}>
            <Block width={width * 0.8} style={{ marginVertical: 10 }}>
              <TextInput
                placeholder='Name'
                placeholderTextColor={theme.COLORS.PLACEHOLDER}
                returnKeyType='next'
                onSubmitEditing={() => this.emailInput.focus()}
                ref={(input) => this.nameInput = input}
                autoCorrect={false}
                style={styles.input}
              />
              <TextInput
                placeholder='Email'
                placeholderTextColor={theme.COLORS.PLACEHOLDER}
                returnKeyType='go'
                ref={(input) => this.emailInput = input}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input}
              />
            </Block>
              <TouchableOpacity
                onPress={() => alert('Added New Board Member')}
              >
                <Block middle style={styles.button}>
                  <Text style={styles.buttonText}>
                    Add Board Member
                  </Text>
                </Block>
              </TouchableOpacity>
            </Block>
            <Block style={{flex: 0.5}} />
          </Block>
        </KeyboardAvoidingView>
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
    alignItems: 'center',
    padding: theme.SIZES.BASE,
    backgroundColor: '#F4F5F7',
    marginHorizontal: theme.SIZES.BASE,
    borderRadius: 8,
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOpacity: 0.2,
  },
  input: {
    height: 44,
    backgroundColor: theme.COLORS.WHITE,
    marginBottom: 20,
    borderRadius: 4,
    paddingHorizontal: 15,
    color: 'black'
  },
  button: {
    width: width * 0.6,
    padding: theme.SIZES.BASE,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#E1B80D',
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOpacity: 0.2,
  },
  buttonText: {
    color: theme.COLORS.WHITE,
    fontSize: 20,
    fontWeight: '600'
  }
});

export default AddBoard;
