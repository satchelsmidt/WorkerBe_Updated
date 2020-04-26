import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import { GoalContext } from '../components/context';
import { Block, theme, Slider, Checkbox } from 'galio-framework';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../constants';
import Step from '../components/step';
import { users, goals } from '../components/testData';

const { width, height } = Dimensions.get('screen');

// Defined Variables
const uIndex = 0; // u = User
const currentUser = users[uIndex];
const uId = currentUser.user_id; // Handled by Authentication.

// Images


// Functions


function OthersGoalsChild({ navigation }) {
  const { getGoal } = React.useContext(GoalContext);

  const goal = goals[getGoal()];
  const steps = goal.goal_steps;
  const boardMembers = [];

  // This function should be handled with MongoDB server calls.
  // Create array of board member images & indexes for the goal.
  for (let i = 0; i < goal.board_member_ids.length; i++) {
    for (let j = 0; j < users.length; j++) {
      if (users[j].user_id == goal.board_member_ids[i].user_id) {
        boardMembers.push({
          "board_member_image": users[j].image, // Images for each board Member.
          "array_index":  users.findIndex(item => item.user_id == goal.board_member_ids[i].user_id)
        });
      }
    }
  }

  return (
    <Block style={styles.container}>
      <ScrollView>
        <Block style={styles.cardsContainer}>
          <Block style={styles.card}>
            <Block>
              <Block style={styles.cardTextHeader}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 30}}
                >{goal.goal_name}</Text>
                <TouchableOpacity
                  onPress={() => navigation.push('Contact')}
                >
                  <Ionicons
                    name={'ios-send'}
                    size={35}
                    color={'#E1B80D'}
                  />
                </TouchableOpacity>
              </Block>
              <Block style={styles.cardProgress}>
                <Slider
                  maximumValue={100}
                  value={goal.goal_progress*100}
                  activeColor={theme.COLORS.SUCCESS}
                />
              </Block>
            </Block>
          </Block>
          <Block style={styles.cardDescription}>
            <Text style={{fontSize: 18}}>
              {goal.goal_desc}
            </Text>
          </Block>
          <Block style={styles.addContainer}>
            <TouchableOpacity
              onPress={() => navigation.push('Add Step')}
            >
              <Block style={styles.add}>
                <Text style={styles.addText}>Add Step</Text>
              </Block>
            </TouchableOpacity>
          </Block>
          <Block>
            {steps.map((step, i) => (
              <Step key={`step${i}`} step={step}/>
            ))}
          </Block>
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
  boardContainer: {
    height: height * 0.12,
    paddingLeft: 5,
    marginTop: 25,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2
  },
  board: {
    flexDirection: 'row',
    paddingLeft: 8,
    alignItems: 'center'
  },
  card: {
    paddingVertical: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    borderRadius: 8,
    marginTop: 25,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2
  },
  boardImageContainer: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 1
  },
  boardImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginRight: 35
  },
  cardTextHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.SIZES.BASE
  },
  cardProgress: {
    marginBottom: -31
  },
  cardDescription: {
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    borderRadius: 8,
    marginTop: 25,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2
  },
  addContainer: {
    flex: 1
  },
  add: {
    padding: 20,
    borderRadius: 8,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 25,
    backgroundColor: '#D4AF37', //E1B80D
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    alignItems: 'center',
  },
  addText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: theme.COLORS.WHITE
  }
});

export default OthersGoalsChild;
