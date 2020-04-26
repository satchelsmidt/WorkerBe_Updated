import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image
} from 'react-native';

import { Block, Checkbox, theme } from 'galio-framework';
import { AuthContext } from '../components/context';
import { Images } from '../constants';

const { width, height } = Dimensions.get('screen');

// Defined Variables


// Images
const background = Images.MainBackground;
const logo = Images.Logo;

// Functions


function CreateAccount({ navigation }) {
  const { signUp } = React.useContext(AuthContext);

  return (
    <Block>
      <ImageBackground
        source={background}
        style={{ width, height }}
      >
        <Block flex middle>
          <KeyboardAvoidingView style={{ justifyContent: 'flex-end' }} behavior="padding">
            <Block style={styles.container}>
              <Block style={styles.socialConnect}>
                <Image
                  source={logo}
                  style={styles.logo}
                />
                <Text style={{color:'#8898AA', fontSize:14}}>
                  Sign up with
                </Text>
                <Block row style={{ marginTop: theme.SIZES.BASE }}>
                  <TouchableOpacity
                    style={{ ...styles.socialLogin, marginRight: 30 }}
                    onPress={() => alert('Clicked LinkedIn!')}
                  >
                    <Block>
                      <Text style={styles.socialLoginText}>LINKEDIN</Text>
                    </Block>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.socialLogin}
                    onPress={() => alert('Clicked Google!')}
                  >
                    <Block>
                      <Text style={styles.socialLoginText}>GOOGLE</Text>
                    </Block>
                  </TouchableOpacity>
                </Block>
              </Block>
              <Block flex>
                <Block middle style={{marginTop: 15, marginBottom: 25}}>
                  <Text style={{color:'#8898AA', fontSize:14}}>
                    Or with Email
                  </Text>
                </Block>
                <Block middle>
                  <Block>
                    <Block width={width * 0.8}>
                      <TextInput
                        placeholder='Name'
                        placeholderTextColor={theme.COLORS.PLACEHOLDER}
                        returnKeyType='next'
                        onSubmitEditing={() => this.emailInput.focus()}
                        ref={(input) => this.nameInput = input}
                        autoCorrect={false}
                        style={styles.input}
                      />
                    </Block>
                    <Block width={width * 0.8}>
                      <TextInput
                        placeholder='Email'
                        placeholderTextColor={theme.COLORS.PLACEHOLDER}
                        returnKeyType='next'
                        onSubmitEditing={() => this.passwordInput.focus()}
                        ref={(input) => this.emailInput = input}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.input}
                      />
                    </Block>
                    <Block width={width * 0.8}>
                      <TextInput
                        placeholder='Password'
                        placeholderTextColor={theme.COLORS.PLACEHOLDER}
                        returnKeyType='go'
                        ref={(input) => this.passwordInput = input}
                        secureTextEntry={true}
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.input}
                      />
                    </Block>
                    <Block row>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={'#E1B80D'}
                        label='I agree with the'
                      />
                      <TouchableOpacity
                        style={{ width: 110, justifyContent: 'center', marginLeft: 4 }}
                        onPress={() => alert('Clicked Privacy Policy!')}
                      >
                        <Text style={{fontSize: 16, color: '#E1B80D'}}
                        >Privacy Policy</Text>
                      </TouchableOpacity>
                    </Block>
                    <Block middle>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => signUp()}
                      >
                        <Text style={{fontWeight: 'bold', fontSize: 16, color: theme.COLORS.WHITE}}
                        >CREATE ACCOUNT</Text>
                      </TouchableOpacity>
                    </Block>
                    <Block center row >
                      <Text style={{color:'#8898AA', fontSize: 14}}
                      >Already have an account? </Text>
                      <TouchableOpacity
                        style={{ width: 40 }}
                        onPress={() => navigation.goBack()}
                      >
                        <Text style={{color:'#E1B80D', fontSize: 14, fontWeight: 'bold'}}
                        >Login</Text>
                      </TouchableOpacity>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
          </KeyboardAvoidingView>
        </Block>
      </ImageBackground>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height * 0.7,
    backgroundColor: '#F4F5F7',
    borderRadius: 4,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
  socialConnect: {
    flex: 0.3,
    alignItems: 'center',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: theme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#8898AA',
    paddingTop: 10,
    paddingBottom: 20
  },
  logo: {
    flex: 1,
    width: '80%',
    resizeMode: 'contain',
  },
  socialLogin: {
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
  socialLoginText: {
    color: '#E1B80D',
    fontWeight: '800',
    fontSize: 14
  },
  input: {
    height: 44,
    backgroundColor: theme.COLORS.WHITE,
    marginBottom: 35,
    borderRadius: 4,
    paddingHorizontal: 15,
    color: 'black'
  },
  button: {
    width: width * 0.5,
    padding: theme.SIZES.BASE,
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#E1B80D',
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOpacity: 0.2,
  }
});

export default CreateAccount;
