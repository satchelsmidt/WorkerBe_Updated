import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';

import { GoalContext } from '../components/context';
import { Block, theme } from 'galio-framework';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../constants';
import { users, goals } from '../components/testData';

const { width, height } = Dimensions.get('screen');

// Defined Variables
const uIndex = 0; // u = User
const currentUser = users[uIndex];
const uId = currentUser.user_id; // Handled by Authentication.

// Functions


function EditGoalBoard() {
  const { getGoal } = React.useContext(GoalContext);

  const goal = goals[getGoal()];
  const boardMembers = [];

  // This function should be handled with MongoDB server calls.
  // Create array of board member images & indexes for the goal.
  for (let i = 0; i < goal.board_member_ids.length; i++) {
    for (let j = 0; j < users.length; j++) {
      if (users[j].user_id == goal.board_member_ids[i].user_id) {
        boardMembers.push({
          "name": users[j].name,
          "image": users[j].image, // Images for each board Member.
          "job": users[j].job,
          "array_index":  users.findIndex(item => item.user_id == goal.board_member_ids[i].user_id)
        });
      }
    }
  }

  return (
    <Block style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow:1}}
      >
        <Block style={styles.cardsContainer}>
          {boardMembers.map((boardMember, i) => (
            <Block key={`board-member${i}`}>
              <Block style={styles.card}>
                <Block style={styles.cardImageContainer}>
                  <Image
                    source={boardMember.image}
                    style={styles.cardImage}
                  />
                </Block>
                <Block style={styles.cardText}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 16}}
                  >{boardMember.name}</Text>
                  <Text style={{fontWeight: '400', fontSize: 13, color: theme.COLORS.GREY}}
                  >{boardMember.job}</Text>
                </Block>
                <TouchableOpacity
                  style={styles.delete}
                  onPress={() => {alert('Clicked Delete!')}}
                >
                  <Text style={{fontWeight: 'bold', fontSize: 18, color: theme.COLORS.WHITE}}
                  >DELETE</Text>
                </TouchableOpacity>
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
    flexDirection: 'row',
    padding: theme.SIZES.BASE,
    paddingRight: 0,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 25,
    borderRadius: 8,
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
  delete: {
    flex: 0.5,
    marginVertical: -16,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EA4242'
  }
});

export default EditGoalBoard;
