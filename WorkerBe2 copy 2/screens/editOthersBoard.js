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

// Functions
// These functions should be handled with MongoDB server calls.
const advisees = [];

for (let i = 0; i < currentUser.boards_on.length; i++) {
  for (let j = 0; j < users.length; j++) {
    if (users[j].user_id == currentUser.boards_on[i].user_id) {
      advisees.push({
        "name": users[j].name,
        "image": users[j].image, // Images for each board Member.
        "job": users[j].job,
        "location": users[j].location,
        "array_index":  users.findIndex(item => item.user_id == currentUser.boards_on[i].user_id)
      });
    }
  }
}

function EditOthersBoard() {
  return (
    <Block style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow:1}}
      >
        <Block style={styles.cardsContainer}>
          {advisees.map((advisee, i) => (
            <Block key={`advisee${i}`}>
              <Block style={styles.card}>
                <Block style={styles.cardImageContainer}>
                  <Image
                    source={advisee.image}
                    style={styles.cardImage}
                  />
                </Block>
                <Block style={styles.cardText}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 16}}
                  >{advisee.name}</Text>
                  <Text style={{fontWeight: '400', fontSize: 13, color: theme.COLORS.GREY}}
                  >{advisee.job}</Text>
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

export default EditOthersBoard;
