import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity
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


function Login({ navigation }) {
    const { logIn } = React.useContext(AuthContext);

    return (
      <Block flex middle>
        <ImageBackground
          source={background}
          style={{ width, height }}
        >
          <KeyboardAvoidingView style={{ flex: 1}} behavior='padding'>
            <Block flex middle>
              <Block style={styles.container}>
                <Block flex={0.6} middle style={styles.socialConnect}>
                  <Image
                    source={logo}
                    style={styles.logo}
                  />
                  <Text style={{color:'#8898AA', fontSize:14}}>
                    Login with
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
                <Block flex style={{marginTop: 10, marginBottom: 10}}>
                  <Block flex={0.17} middle>
                    <Text style={{color:'#8898AA', fontSize:14}}>
                      Or with Email
                    </Text>
                  </Block>
                  <Block flex middle>
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
                    <Block middle>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => logIn()}
                    >
                      <Text style={{fontWeight: 'bold', fontSize: 16, color: theme.COLORS.WHITE}}
                      >LOGIN</Text>
                    </TouchableOpacity>
                    </Block>
                  </Block>
                  <Block middle row style={{ marginBottom: 10 }}>
                    <Text style={{color:'#8898AA', fontSize: 14}}
                    >First time here? </Text>
                    <TouchableOpacity
                      style={{ width: 130 }}
                      onPress={() => navigation.push('Create Account')}
                    >
                      <Text style={{color:'#E1B80D', fontSize: 14, fontWeight: 'bold'}}
                      >Create an Account</Text>
                    </TouchableOpacity>
                  </Block>
                </Block>
              </Block>
            </Block>
          </KeyboardAvoidingView>
        </ImageBackground>
      </Block>
    );
  }

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height * 0.58,
    backgroundColor: '#F4F5F7',
    borderRadius: 4,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 8,
    shadowOpacity: 0.1
  },
  socialConnect: {
    backgroundColor: theme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#8898AA',
    paddingBottom: 25
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
    marginBottom: 25,
    borderRadius: 4,
    paddingHorizontal: 15,
    color: 'black'
  },
  button: {
    width: width * 0.5,
    padding: theme.SIZES.BASE,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: '#E1B80D',
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOpacity: 0.2,
  }
});

export default Login;
