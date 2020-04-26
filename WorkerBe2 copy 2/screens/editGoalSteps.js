import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput
} from 'react-native';

import { GoalContext } from '../components/context';
import { Block, theme } from 'galio-framework';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../constants';
import { users, goals } from '../components/testData';

const { width, height } = Dimensions.get('screen');

//// ADD INFO... have an "i" icon that users can click to learn
//   what a boardmember is. With link out to full web article.

// Defined Variables
const uIndex = 0; // u = User
const currentUser = users[uIndex];
const uId = currentUser.user_id; // Handled by Authentication.

// Functions


function EditGoalSteps() {
  const { getGoal } = React.useContext(GoalContext);
  const goal = goals[getGoal()];
  const steps = goal.goal_steps;

  return (
    <Block style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow:1}}
      >
        <Block style={styles.cardsContainer}>
          {steps.map((step, i) => (
            <Block key={`board-member${i}`}>
              <Block style={styles.card}>
                <Block width={width * 0.8}>
                  <TextInput
                    defaultValue={step.step_name}
                    editable={true}
                    placeholder='Step Title'
                    placeholderTextColor={theme.COLORS.PLACEHOLDER}
                    returnKeyType='next'
                    // onSubmitEditing={() => this.descInput.focus()}
                    ref={(input) => this.nameInput = input}
                    style={styles.input}
                  />
                </Block>
                <Block width={width * 0.8}>
                  <TextInput
                    defaultValue={step.step_desc}
                    editable={true}
                    placeholder='Describe the step...'
                    placeholderTextColor={theme.COLORS.PLACEHOLDER}
                    ref={(input) => this.descInput = input}
                    style={styles.descriptionInput}
                    multiline
                  />
                </Block>
                <Block style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={styles.delete}
                    onPress={() => {alert('Clicked Delete!')}}
                  >
                    <Text style={{fontWeight: 'bold', fontSize: 18, color: theme.COLORS.WHITE}}
                    >DELETE</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.save}
                    onPress={() => {alert('Clicked Save!')}}
                  >
                    <Text style={{fontWeight: 'bold', fontSize: 18, color: theme.COLORS.WHITE}}
                    >SAVE</Text>
                  </TouchableOpacity>
                </Block>
              </Block>
            </Block>
          ))}
        </Block>
      </ScrollView>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height - 172
  },
  cardsContainer: {
    marginBottom: 25
  },
  card: {
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 25,
    borderRadius: 8,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  input: {
    height: 44,
    backgroundColor: '#F3F3F3',
    marginBottom: 15,
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
    backgroundColor: '#F3F3F3',
    marginBottom: 15,
    borderRadius: 4,
    paddingHorizontal: 15,
    color: 'black',
    textAlignVertical: 'top'
  },
  delete: {
    flex: 1,
    paddingVertical: 10,
    borderBottomLeftRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EA4242'
  },
  save: {
    flex: 1,
    paddingVertical: 10,
    borderBottomRightRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5ABB5D'
  }
});

export default EditGoalSteps;
