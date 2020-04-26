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

import { ProfileContext, GoalContext } from '../components/context';
import { Block, theme, Slider } from 'galio-framework';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../constants';
import { users, goals } from '../components/testData';

const { width, height } = Dimensions.get('screen');

// Defined Variables
const uIndex = 0; // u = User
const currentUser = users[uIndex];
const uId = currentUser.user_id; // Handled by Authentication.
let userGoals = [];

// Images
const boardMembers = [];

// Functions
// These functions should be handled with MongoDB server calls.
for (let i = 0; i < goals.length; i++) {
  if ( uId == goals[i].owner_id ) {
    userGoals.push(goals[i]); // Goals for each user.
  }
}

// Add board member images object to each user goal.
userGoals.map(userGoal => (
  userGoal["board_members_images"] = [],
  userGoal["array_index"] = []
));

// Add board member images to each user goal.
for (let i = 0; i < userGoals.length; i++) {
  for (let j = 0; j < userGoals[i].board_member_ids.length; j++) {
    for (let k = 0; k < users.length; k++) {
      if(userGoals[i].board_member_ids[j].user_id == users[k].user_id) {
        userGoals[i].board_members_images.push({"board_member_image": users[k].image});
      }
    }
  }
  userGoals[i].array_index.push(userGoals.findIndex(item => item.goal_id == userGoals[i].goal_id))
}

for (let i = 0; i < currentUser.board_members.length; i++) {
  for (let j = 0; j < users.length; j++) {
    if (users[j].user_id == currentUser.board_members[i].user_id) {
      boardMembers.push({
        "board_member_image": users[j].image, // Images for each board Member.
        "array_index":  users.findIndex(item => item.user_id == currentUser.board_members[i].user_id)
      });
    }
  }
}

// ADD UNIQUE KEY - created placeholders. Will make robust with MongoDB.

function Goals({ navigation }) {
  const { changeBoardProfile } = React.useContext(ProfileContext);
  const { changeGoal } = React.useContext(GoalContext);

// Updates each goal progress bar. Should be handled server-side?
  userGoals.forEach((goal) => {
    let count = 0;
    const total = goal.goal_steps.length;
    goal.goal_steps.forEach((step) => {
      step.step_check == true ? count++ : count;
    });
    goal.goal_progress = (count / total);
  });

  return (
    <Block style={styles.container}>
      <Block style={styles.topBarContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Block style={styles.topBar}>
            {boardMembers.map((boardMember, i) => (
              <TouchableOpacity key={`board-member${i}`}
                style={styles.topBarImageContainer}
                onPress={() => {
                  changeBoardProfile(boardMember.array_index);
                  navigation.push('Board Member');
                }}
              >
                <Image
                  source={boardMember.board_member_image}
                  style={styles.topBarImage}
                />
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              onPress={() => navigation.push('Add Board Member')}
            >
            {
            //When I click this. The header functionality stops working for the Board Tab.
            //However, if I navigate to the board tab before I click this, then the issue is gone.
            }
            <Ionicons
              name={'ios-add-circle'}
              size={50}
              color={'#E1B80D'}
            />
            </TouchableOpacity>
          </Block>
        </ScrollView>
      </Block>
      <ScrollView>
        <Block style={styles.cardsContainer}>
          {userGoals.map(userGoal => (
            <TouchableOpacity key={userGoal.goal_id}
              onPress={() => {
                changeGoal(userGoal.array_index);
                navigation.push('Goal');
              }}
            >
              <Block style={styles.card}>
                <Block style={styles.cardBoardContainer}>
                  {userGoal.board_members_images.map((item, i) => (
                    <Block key={`board-member${i}`}>
                      <Image
                        source={item.board_member_image}
                        style={styles.cardBoardNotification}
                      />
                    </Block>
                  ))}
                </Block>
                <Block>
                  <Block style={styles.cardTextHeader}>
                    <Text
                      style={{fontWeight: 'bold', fontSize: 30}}
                    >{userGoal.goal_name}</Text>
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
                      value={userGoal.goal_progress*100}
                      activeColor={theme.COLORS.SUCCESS}
                    />
                  </Block>
                </Block>
              </Block>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            onPress={() => navigation.push('Add Goal')}
          >
            <Block style={styles.addGoal}>
              <Text style={styles.addText}>Add Goal</Text>
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
  topBarContainer: {
    height: height * 0.12,
    paddingLeft: 5,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  topBar: {
    flexDirection: 'row',
    paddingLeft: 8,
    alignItems: 'center',
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
  topBarImageContainer: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 1
  },
  topBarImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginRight: 35
  },
  cardBoardContainer: {
    flexDirection: 'row',
    height: 40,
    marginTop: -30,
    paddingHorizontal: theme.SIZES.BASE,
    paddingBottom: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  cardBoardNotification: {
    marginRight: 10,
    height: 30,
    width: 30,
    borderRadius: 15,
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
  addGoal: {
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

export default Goals;
