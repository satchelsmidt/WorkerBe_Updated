import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';

import { GoalContext } from '../components/context';
import { Block, theme } from 'galio-framework';
import { Images } from '../constants';
import { users, goals } from '../components/testData';

const { width, height } = Dimensions.get('screen');

// Defined Variables
const uIndex = 0; // u = User
const currentUser = users[uIndex];
const uId = currentUser.user_id; // Handled by Authentication.

// Images
const background = Images.MainBackground;

// Functions


function EditGoal({ navigation }) {
  const { getGoal } = React.useContext(GoalContext);
  const goal = goals[getGoal()];

    return (
      <Block flex middle>
        <ImageBackground
          source={background}
          style={{ width, height }}
        >
          <KeyboardAvoidingView style={{ flex: 1}} behavior='padding'>
            <Block flex middle>
              <Block style={styles.container}>
                <Block flex style={{marginTop: 10, marginBottom: 10}}>
                  <Block flex middle>
                    <Block width={width * 0.8}>
                      <TextInput
                        defaultValue={goal.goal_name}
                        editable={true}
                        placeholder='Goal Title'
                        placeholderTextColor={theme.COLORS.PLACEHOLDER}
                        returnKeyType='next'
                        // onSubmitEditing={() => this.descInput.focus()}
                        ref={(input) => this.nameInput = input}
                        style={styles.input}
                      />
                    </Block>
                    <Block width={width * 0.8}>
                      <TextInput
                        defaultValue={goal.goal_desc}
                        editable={true}
                        placeholder='Describe the goal...'
                        placeholderTextColor={theme.COLORS.PLACEHOLDER}
                        ref={(input) => this.descInput = input}
                        style={styles.descriptionInput}
                        multiline
                      />
                    </Block>
                    <Block style={styles.doubleInputContainer}>
                      <TouchableOpacity
                        style={styles.editButton}
                        onPress={() => navigation.push(`Edit Board`)}
                      >
                        <Text style={styles.editButtonText}
                        >EDIT BOARD</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.editButton}
                        onPress={() => navigation.push(`Edit Steps`)}
                      >
                        <Text style={styles.editButtonText}
                        >EDIT STEPS</Text>
                      </TouchableOpacity>
                    </Block>
                    <Block style={styles.doubleInputContainer}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => alert('Clicked Cancel!')}
                      >
                        <Text style={styles.buttonText}
                        >CANCEL</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => alert('Clicked Save!')}
                      >
                        <Text style={styles.buttonText}
                        >SAVE</Text>
                      </TouchableOpacity>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
          </KeyboardAvoidingView>
        </ImageBackground>
      </Block>
    );
  }

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height * 0.4,
    backgroundColor: '#F4F5F7',
    borderRadius: 4,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 8,
    shadowOpacity: 0.1
  },
  input: {
    height: 44,
    backgroundColor: theme.COLORS.WHITE,
    marginBottom: 25,
    borderRadius: 4,
    paddingHorizontal: 15,
    color: 'black',
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1
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
  doubleInputContainer: {
    flexDirection: 'row',
    width: width * 0.8,
    justifyContent: 'space-between'
  },
  editButton: {
    width: width * 0.375,
    padding: 15,
    alignItems: 'center',
    marginBottom: 35,
    borderRadius: 4,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1
  },
  editButtonText: {
    fontWeight: '400',
    fontSize: 18,
    color: theme.COLORS.GREY
  },
  button: {
    width: width * 0.375,
    padding: theme.SIZES.BASE,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#E1B80D',
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOpacity: 0.2
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: theme.COLORS.WHITE
  }
});

export default EditGoal;
