import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import { Block, theme } from 'galio-framework';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../constants';

const { width, height } = Dimensions.get('screen');

// Defined Variables
const name = 'Kris Moon';
const job = 'Programmer';
const location = 'Seattle, WA';

// Images
const background = Images.MainBackground;
const profilePicture = Images.PersonPic;

// Functions


function AddBoardToGoal() {
  return (
    <Block flex middle>
      <ImageBackground
        source={background}
        style={{ width, height }}
      >
        <Block style={styles.container}>
          <Block style={styles.cardContainer}>
            <TouchableOpacity
              onPress={() => alert('Added Board Member!')}
            >
              <Block style={styles.card}>
                <Block style={styles.cardImageContainer}>
                  <Image
                    source={profilePicture}
                    style={styles.cardImage}
                  />
                </Block>
                <Block style={styles.cardText}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 16}}
                  >{name}</Text>
                  <Text style={{fontWeight: '400', fontSize: 13, color: theme.COLORS.GREY}}
                  >{job}</Text>
                </Block>
                <Block style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicons
                    name={'ios-pin'}
                    size={20}
                    color={theme.COLORS.MUTED}
                  />
                  <Text style={{marginLeft: 10, fontWeight: '400', fontSize: 12, color: theme.COLORS.GREY}}
                  >{location}</Text>
                </Block>
              </Block>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert('Added Board Member!')}
            >
              <Block style={styles.card}>
                <Block style={styles.cardImageContainer}>
                  <Image
                    source={Images.PersonPic2}
                    style={styles.cardImage}
                  />
                </Block>
                <Block style={styles.cardText}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 16}}
                  >Jenna Harding</Text>
                  <Text style={{fontWeight: '400', fontSize: 13, color: theme.COLORS.GREY}}
                  >Freelance Writer</Text>
                </Block>
                <Block style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicons
                    name={'ios-pin'}
                    size={20}
                    color={theme.COLORS.MUTED}
                  />
                  <Text style={{marginLeft: 10, fontWeight: '400', fontSize: 12, color: theme.COLORS.GREY}}
                  >Los Angeles, CA</Text>
                </Block>
              </Block>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert('Added Board Member!')}
            >
              <Block style={styles.card}>
                <Block style={styles.cardImageContainer}>
                  <Image
                    source={Images.PersonPic3}
                    style={styles.cardImage}
                  />
                </Block>
                <Block style={styles.cardText}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 16}}
                  >Tania Sun</Text>
                  <Text style={{fontWeight: '400', fontSize: 13, color: theme.COLORS.GREY}}
                  >Marketing Consultant</Text>
                </Block>
                <Block style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicons
                    name={'ios-pin'}
                    size={20}
                    color={theme.COLORS.MUTED}
                  />
                  <Text style={{marginLeft: 10, fontWeight: '400', fontSize: 12, color: theme.COLORS.GREY}}
                  >Chicago, IL</Text>
                </Block>
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
      </ImageBackground>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    justifyContent: 'center',
  },
  cardContainer: {
    height: height * 0.4,
    backgroundColor: '#F4F5F7',
    justifyContent: 'space-around',
    marginHorizontal: theme.SIZES.BASE,
    borderRadius: 8,
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOpacity: 0.2,
  },
  board: {
    marginHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  card: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
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
    // flexDirection: 'column'
  },
  cardTextHeader: {
    // flexDirection: 'row',
    // justifyContent: 'space-between'
  }
});

export default AddBoardToGoal;
