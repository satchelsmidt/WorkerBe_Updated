import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native';

import { Block, theme } from 'galio-framework';
import { AuthContext } from '../components/context';

// Defined Variables


// Images


// Functions


function Logout({ navigation }) {
  const { logOut } = React.useContext(AuthContext);
  return (
    <Block style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={() => logOut()}
      >
        <Block style={styles.signOut}>
          <Text style={styles.signOutText}>Log Out</Text>
        </Block>
      </TouchableOpacity>
    </Block>
  );
}

const styles = StyleSheet.create({
  signOut: {
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
  signOutText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: theme.COLORS.WHITE
  }
});

export default Logout;
