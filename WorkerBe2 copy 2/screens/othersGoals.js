import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Platform
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

// Images
const background = Images.MainBackground;

// Functions
// These functions should be handled with MongoDB server calls.


function OthersGoals({ navigation }) {
  const { changeGoal } = React.useContext(GoalContext);
  const { getProfile } = React.useContext(ProfileContext);

  let aIndex = getProfile(); // Advisee Index
  let advisee = users[aIndex];
  const goalsMet = 12; //This depends on how we store completed goal data.

  advisee.array_index = aIndex;

  const adviseeGoals = [];

  for (let i = 0; i < goals.length; i++) {
    if ( advisee.user_id == goals[i].owner_id ) {
      adviseeGoals.push(goals[i]); // Goals for each user.
    }
  }

  adviseeGoals.map(adviseeGoal => (
    adviseeGoal["array_index"] = []
  ));

  // Add index to each user goal.
  for (let i = 0; i < adviseeGoals.length; i++) {
    adviseeGoals[i].array_index.push(goals.findIndex(item => item.goal_id == adviseeGoals[i].goal_id))
  }

  // Updates each goal progress bar. Should be handled server-side?
    adviseeGoals.forEach((goal) => {
      let count = 0;
      const total = goal.goal_steps.length;
      goal.goal_steps.forEach((step) => {
        step.step_check == true ? count++ : count;
      });
      goal.goal_progress = (count / total);
    });

  return (
    <Block style={styles.container}>
      <Block flex>
          <ScrollView
            style={{ paddingTop: '10%' }}
          >
            <ImageBackground
              source={background}
              style={styles.profileContainer}
              imageStyle={styles.profileBackground}
            >
              <TouchableOpacity
                style={styles.profileCard}
                onPress={() => {
                  navigation.push('Their Profile');
                }}
              >
                <Block middle style={styles.avatarContainer}>
                  <Image
                    source={advisee.image}
                    style={styles.avatar}
                  />
                </Block>
                <Block style={styles.info}>
                  <Block row space='around' style={{marginTop: 10}}>
                    <Block middle>
                      <Text style={{marginBottom: 4, fontWeight: 'bold', fontSize: 22, color: '#525F7F'}}
                      >{goalsMet}</Text>
                      <Text style={{fontSize: 16, color: theme.COLORS.TEXT}}>Goals Met</Text>
                    </Block>
                    <Block middle>
                      <Text style={{fontWeight: 'bold', fontSize: 22, color: '#525F7F', marginBottom: 4}}
                      >{advisee.boards_on.length}</Text>
                      <Text style={{fontSize: 16, color: theme.COLORS.TEXT}}>Boards On</Text>
                    </Block>
                  </Block>
                </Block>
                <Block>
                  <Block style={styles.nameInfo}>
                    <Text style={{fontWeight: 'bold', fontSize: 28, color: '#32325D' }}>
                      {advisee.name}
                    </Text>
                    <Text style={{ marginTop: 10, fontSize: 16, color: '#32325D' }}>
                      {advisee.location}
                    </Text>
                    <Text style={{ marginTop: 15, fontSize: 16, color: '#32325D' }}>
                      {advisee.job} | {advisee.company}
                    </Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </ImageBackground>
            <Block style={styles.cardsContainer}>
              {adviseeGoals.map((adviseeGoal, i) => (
                <TouchableOpacity key={`advisee-goal${i}`}
                  onPress={() => {
                    changeGoal(adviseeGoal.array_index);
                    navigation.push('Goal');
                  }}
                >
                  <Block style={styles.card}>
                    <Block>
                      <Block style={styles.cardTextHeader}>
                        <Text style={{fontWeight: 'bold', fontSize: 30}}>
                          {adviseeGoal.goal_name}
                        </Text>
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
                          value={adviseeGoal.goal_progress*100}
                          activeColor={theme.COLORS.SUCCESS}
                        />
                      </Block>
                    </Block>
                  </Block>
                </TouchableOpacity>
              ))}
            </Block>
          </ScrollView>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height - 172
  },
  profileContainer: {
    marginBottom: 25
  },
  profileBackground: {
    height: height / 2.08,
    marginTop: -100,
  },
  profileCard: {
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 40,
    borderRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
  },
  nameInfo: {
    marginTop: 35,
    alignItems: 'center'
  },
  cardsContainer: {
    marginBottom: 60
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
  cardTextHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.SIZES.BASE
  },
  cardProgress: {
    marginBottom: -31
  }
});

export default OthersGoals;
