import React from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

import { Block, theme } from 'galio-framework';
import { Images } from '../constants';

const { width, height } = Dimensions.get('screen');

// MAKE THIS DYNAMIC... loading for number of boardmembers
// DISPLAY 'Add First Board Member' as the default
//// ADD INFO... have an "i" icon that users can click to learn
//   what a boardmember is. With link out to full web article.

// Defined Variables


// Images
const ownersBoard = Images.OwnersBoard;
const othersBoard = Images.OthersBoard;

// Functions


function Board({ navigation }) {
  return (
    <Block style={styles.container}>
        <Block style={styles.cardsContainer}>
          <TouchableOpacity
            onPress={() => navigation.push('Board Members')}
          >
            <Block>
              <Block style={styles.card}>
                <Image
                  style={styles.boardPhoto}
                  source={ownersBoard}
                />
                <Text style={styles.boardText}>Board Members</Text>
              </Block>
            </Block>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push('People You Advise')}
          >
            <Block>
              <Block style={styles.card}>
                <Image
                  style={styles.boardPhoto}
                  source={othersBoard}
                />
                <Text style={styles.boardText}>People You Advise</Text>
              </Block>
            </Block>
          </TouchableOpacity>
        </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height - 172,
    justifyContent: 'center'
  },
  cardsContainer: {
    marginBottom: 25
  },
  card: {
    alignItems: 'center',
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 25,
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  boardPhoto: {
    marginTop: -16,
    width: width * 0.922,
    height: height * 0.275,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  boardText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10
  }
});

export default Board;
