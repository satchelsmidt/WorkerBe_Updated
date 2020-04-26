import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';

import { Block, theme } from 'galio-framework';

//Testing Expo Image Picker
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

// import ImagePicker from 'react-native-image-picker';
import { Images } from '../constants';
import { users } from '../components/testData';

const { width, height } = Dimensions.get('screen');

// Defined Variables
const uIndex = 0; // Logged in User.

// Images
const background = Images.MainBackground;

// Functions


function EditProfile() {

  // state = {
  //   image: null,
  // };

  const user = users[uIndex];
  const [photo, setPhoto] = React.useState(null);

  // handleChoosePhoto = () => {
  //   const options = {
  //     noData: true
  //   };
  //   ImagePicker.launchImageLibrary(options, response => {
  //     if (response.uri) {
  //       setPhoto(response);
  //     }
  //   });
  // };

  React.useEffect(() =>{
    this.getPermissionAsync}, [])

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setPhoto(result);

        // this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  //const { photo } = this.photo;
  return (
    <Block flex middle>
      <ImageBackground
        source={background}
        style={{ width, height }}
      >
        <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
          <Block flex middle>
            <Block style={styles.container}>
              <Block flex style={{ marginTop: 10, marginBottom: 10 }}>
                <Block flex middle>
                  <Block style={{ marginTop: -85, marginBottom: 20, alignItems: 'center' }}>
                    {photo != null ? (
                      <Image
                        source={{ uri: photo.uri }}
                        style={{ height: 124, width: 124, borderRadius: 62, marginBottom: 10 }}
                      />
                    ) : (
                        <Image
                          source={user.image}
                          style={{ height: 124, width: 124, borderRadius: 62, marginBottom: 10 }}
                        />
                      )}
                    <TouchableOpacity
                      style={styles.photoButton}
                    // onPress={() => handleChoosePhoto()}
                    onPress={() => _pickImage()}

                    >
                      <Text style={styles.photoButtonText}
                      >Change Photo</Text>
                    </TouchableOpacity>
                  </Block>
                  <Block width={width * 0.8}>
                    <TextInput
                      defaultValue={user.name}
                      editable={true}
                      placeholder='Name'
                      placeholderTextColor={theme.COLORS.PLACEHOLDER}
                      returnKeyType='next'
                      // onSubmitEditing={() => this.emailInput.focus()}
                      ref={(input) => this.nameInput = input}
                      autoCorrect={false}
                      style={styles.input}
                    />
                  </Block>
                  <Block width={width * 0.8}>
                    <TextInput
                      defaultValue={user.email}
                      editable={true}
                      placeholder='Email'
                      placeholderTextColor={theme.COLORS.PLACEHOLDER}
                      returnKeyType='next'
                      // onSubmitEditing={() => this.phoneInput.focus()}
                      ref={(input) => this.emailInput = input}
                      keyboardType='email-address'
                      autoCapitalize='none'
                      autoCorrect={false}
                      style={styles.input}
                    />
                  </Block>
                  <Block width={width * 0.8}>
                    <TextInput
                      defaultValue={user.phone}
                      editable={true}
                      placeholder='Phone'
                      placeholderTextColor={theme.COLORS.PLACEHOLDER}
                      returnKeyType='next'
                      // onSubmitEditing={() => this.locationInput.focus()}
                      ref={(input) => this.phoneInput = input}
                      keyboardType='number-pad'
                      style={styles.input}
                    />
                  </Block>
                  <Block style={styles.doubleInputContainer}>
                    <Block width={width * 0.375}>
                      <TextInput
                        defaultValue={user.job}
                        editable={true}
                        placeholder='Job'
                        placeholderTextColor={theme.COLORS.PLACEHOLDER}
                        returnKeyType='next'
                        // onSubmitEditing={() => this.companyInput.focus()}
                        ref={(input) => this.jobInput = input}
                        style={styles.input}
                      />
                    </Block>
                    <Block width={width * 0.375}>
                      <TextInput
                        defaultValue={user.company}
                        editable={true}
                        placeholder='Company'
                        placeholderTextColor={theme.COLORS.PLACEHOLDER}
                        returnKeyType='next'
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        ref={(input) => this.companyInput = input}
                        style={styles.input}
                      />
                    </Block>
                  </Block>
                  <Block width={width * 0.8}>
                    <TextInput
                      defaultValue={user.location}
                      editable={true}
                      placeholder='Location'
                      placeholderTextColor={theme.COLORS.PLACEHOLDER}
                      returnKeyType='next'
                      // onSubmitEditing={() => this.jobInput.focus()}
                      ref={(input) => this.locationInput = input}
                      style={styles.input}
                    />
                  </Block>
                  <Block style={styles.doubleInputContainer}>
                    <Block width={width * 0.375}>
                      <TextInput
                        placeholder='Password'
                        placeholderTextColor={theme.COLORS.PLACEHOLDER}
                        returnKeyType='next'
                        onSubmitEditing={() => this.passwordConfirmInput.focus()}
                        ref={(input) => this.passwordInput = input}
                        secureTextEntry={true}
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.input}
                      />
                    </Block>
                    <Block width={width * 0.375}>
                      <TextInput
                        placeholder='Confirm Password'
                        placeholderTextColor={theme.COLORS.PLACEHOLDER}
                        returnKeyType='go'
                        ref={(input) => this.passwordConfirmInput = input}
                        secureTextEntry={true}
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.input}
                      />
                    </Block>
                  </Block>
                  <Block style={styles.doubleInputContainer}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => alert('Clicked Cancel!')}
                    >
                      <Text style={styles.buttonText}
                      >CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => alert('Clicked Save!')}
                    >
                      <Text style={styles.buttonText}
                      >SAVE</Text>
                    </TouchableOpacity>
                  </Block>
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
    height: height * 0.7,
    backgroundColor: '#F4F5F7',
    borderRadius: 4,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.1
  },
  input: {
    height: 44,
    backgroundColor: theme.COLORS.WHITE,
    marginBottom: 25,
    borderRadius: 4,
    paddingHorizontal: 15,
    color: 'black',
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1
  },
  doubleInputContainer: {
    flexDirection: 'row',
    width: width * 0.8,
    justifyContent: 'space-between'
  },
  photoButton: {
    padding: theme.SIZES.BASE / 1.75,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1
  },
  photoButtonText: {
    fontWeight: '400',
    fontSize: 14,
    color: 'black'
  },
  button: {
    width: width * 0.375,
    padding: theme.SIZES.BASE,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: '#E1B80D',
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOpacity: 0.2
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: theme.COLORS.WHITE
  }
});

export default EditProfile;
