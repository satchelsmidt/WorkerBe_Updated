import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';

import { ProfileContext } from '../components/context';
import { Block, theme } from 'galio-framework';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../constants';
import { users } from '../components/testData';

const { width, height } = Dimensions.get('screen');

//// ADD INFO... have an "i" icon that users can click to learn
//   what a boardmember is. With link out to full web article.

// Defined Variables
const uIndex = 0; // u = User
const currentUser = users[uIndex];
const uId = currentUser.user_id; // Handled by Authentication.
const boardMembers = [];

// Functions
// These functions should be handled with MongoDB server calls.
for (let i = 0; i < currentUser.board_members.length; i++) {
  for (let j = 0; j < users.length; j++) {
    if (users[j].user_id == currentUser.board_members[i].user_id) {
      boardMembers.push({
        "name": users[j].name,
        "image": users[j].image, // Images for each board Member.
        "job": users[j].job,
        "location": users[j].location,
        "array_index":  users.findIndex(item => item.user_id == currentUser.board_members[i].user_id)
      });
    }
  }
}

function OwnersBoard({ navigation }) {
  const { changeBoardProfile } = React.useContext(ProfileContext);

  return (
    <Block style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow:1}}
      >
        <Block style={styles.cardsContainer}>
          {boardMembers.map((boardMember, i) => (
            <TouchableOpacity key={`board-member${i}`}
              onPress={() => {
                changeBoardProfile(boardMember.array_index);
                navigation.push('Their Profile');
              }}
            >
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
                <Block style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicons
                    name={'ios-pin'}
                    size={20}
                    color={theme.COLORS.MUTED}
                  />
                  <Text style={{marginLeft: 10, fontWeight: '400', fontSize: 12, color: theme.COLORS.GREY}}
                  >{boardMember.location}</Text>
                </Block>
              </Block>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            onPress={() => navigation.push('Add Board Member')}
          >
            <Block style={styles.addBoard}>
              <Text style={styles.addBoardText}>Add Board Member</Text>
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
    height: height - 172
  },
  cardsContainer: {
    marginBottom: 25
  },
  card: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: theme.SIZES.BASE,
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
  addBoard: {
    padding: 20,
    borderRadius: 8,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 25,
    backgroundColor: '#D4AF37', //E1B80D
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    alignItems: 'center'
  },
  addBoardText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: theme.COLORS.WHITE
  }
});

export default OwnersBoard;
