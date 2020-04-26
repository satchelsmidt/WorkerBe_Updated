import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from 'react-native';

import { ProfileContext } from '../components/context';
import { Block, theme } from 'galio-framework';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../constants';
import { users } from '../components/testData';

const { width, height } = Dimensions.get('screen');

// Defined Variables


// Images
const background = Images.MainBackground;
const linkedInSignIn = Images.LinkedInSignIn;

function BoardProfile({ navigation }) {
  const { getProfile } = React.useContext(ProfileContext);

  const user = users[getProfile()];
  const goalsMet = 12; //This depends on how we store completed goal data.

  return (
    <Block>
      <Block>
        <ImageBackground
          source={background}
          style={styles.container}
          imageStyle={styles.profileBackground}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width, paddingTop: '25%' }}
          >
            <Block style={styles.profileCard}>
              <Block middle style={styles.avatarContainer}>
                <Image
                  source={user.image}
                  style={styles.avatar}
                />
              </Block>
              <Block style={styles.info}>
                <Block row space='around' style={{marginTop: 10}}>
                  <Block middle>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#525F7F', marginBottom: 4 }}
                    >{goalsMet}</Text>
                    <Text style={{ fontSize: 16, color: theme.COLORS.TEXT }}>
                      Goals Met
                    </Text>
                  </Block>
                  <Block middle>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#525F7F', marginBottom: 4 }}
                    >{user.boards_on.length}</Text>
                    <Text style={{ fontSize: 16, color: theme.COLORS.TEXT }}>
                      Boards On
                    </Text>
                  </Block>
                </Block>
              </Block>
              <Block>
                <Block middle style={styles.nameInfo}>
                  <Text style={{ fontWeight: 'bold', fontSize: 28, color: '#32325D' }}>
                    {user.name}
                  </Text>
                  <Text style={{ fontSize: 16, color: '#32325D', marginTop: 10 }}>
                    {user.location}
                  </Text>
                  <Text style={{ fontSize: 16, color: '#32325D', marginTop: 15 }}>
                    {user.job} | {user.company}
                  </Text>
                </Block>
                <Block style={{ marginTop: 20, marginBottom: 15 }}>
                  <Block style={styles.divider} />
                </Block>
                <Block row style={{paddingLeft: 70}}>
                  <Ionicons name={'ios-mail'} size={35} color={'gray'} />
                  <Text style={{ fontSize: 16, color: '#525F7F', textAlign: 'center', marginLeft: 20, marginTop: 6 }}>
                    {user.email}
                  </Text>
                </Block>
                <Block row style={{paddingLeft: 75}}>
                  <Ionicons name={'ios-phone-portrait'} size={35} color={'gray'} />
                  <Text style={{ fontSize: 16, color: '#525F7F', textAlign: 'center', marginLeft: 20, marginTop: 7 }}>
                    {user.phone}
                  </Text>
                </Block>
                <Block middle style={{ paddingVertical: 20 }}>
                  <Image source={linkedInSignIn} />
                </Block>
              </Block>
            </Block>
            <TouchableOpacity
              onPress={() => navigation.push('Contact')}
            >
              <Block style={styles.message}>
                <Text style={styles.messageText}>Message</Text>
              </Block>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height
  },
  profileBackground: {
    height: height / 2.22
  },
  profileCard: {
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 25,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
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
    marginTop: 35
  },
  divider: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#E9ECEF'
  },
  message: {
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
  messageText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: theme.COLORS.WHITE
  }
});

export default BoardProfile;
