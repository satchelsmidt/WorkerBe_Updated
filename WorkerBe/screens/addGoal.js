import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
  TextInput,
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


function AddGoal() {
  return (
    <Block flex middle>
      <ImageBackground
        source={background}
        style={{ width, height }}
      >
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <Block>
            <Block style={styles.card}>
            <Block width={width * 0.8} style={{ marginTop: 15 }}>
            <TextInput
              placeholder='Goal Title'
              placeholderTextColor={theme.COLORS.PLACEHOLDER}
              returnKeyType='next'
              onSubmitEditing={() => this.descriptionInput.focus()}
              ref={(input) => this.titleInput = input}
              style={styles.titleInput}
            />
            </Block>
            <Block width={width * 0.8} >
            <TextInput
              placeholder='Describe the goal...'
              placeholderTextColor={theme.COLORS.PLACEHOLDER}
              returnKeyType='go'
              ref={(input) => this.descriptionInput = input}
              style={styles.descriptionInput}
              multiline
            />
            </Block>
              <TouchableOpacity
                onPress={() => alert('Added New Goal')}
              >
                <Block middle style={styles.button}>
                  <Text style={{color: theme.COLORS.WHITE, fontSize: 20, fontWeight: '600'}}>
                    Add Goal
                  </Text>
                </Block>
              </TouchableOpacity>
            </Block>
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
    height: height * 0.32,
    alignItems: 'center',
    padding: theme.SIZES.BASE,
    backgroundColor: '#F4F5F7',
    marginHorizontal: theme.SIZES.BASE,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  titleInput: {
    height: 44,
    backgroundColor: theme.COLORS.WHITE,
    marginBottom: 20,
    borderRadius: 4,
    paddingHorizontal: 15,
    color: 'black'
  },
  descriptionInput: {
    height: 88,
    backgroundColor: theme.COLORS.WHITE,
    marginBottom: 25,
    borderRadius: 4,
    paddingHorizontal: 15,
    color: 'black',
    textAlignVertical: 'top'
  },
  button: {
    width: width * 0.5,
    padding: theme.SIZES.BASE,
    borderRadius: 8,
    backgroundColor: '#E1B80D',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  }
});

export default AddGoal;
