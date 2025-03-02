import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  AsyncStorage,
  Image,
  Dimensions,
} from 'react-native';
import top from '../../../wireframes/assets/Your_Name/top.png';
import How_can_we_call_you from '../../../wireframes/assets/Your_Name/How_can_we_call_you.png';
import bottom from '../../../wireframes/assets/Your_Name/bottom.png';
import { AntDesign } from '@expo/vector-icons';

export default class YourNameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  saveName = async () => {
    // Saving the Name in Asyncstorage
    try {
      await AsyncStorage.setItem('Name', this.state.text);
    } catch (e) {
      console.log(e);
    }

    // Navigating to the next screen
    this.props.navigation.navigate('AverageCycle');
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={top} style={styles.top} />
        <Image source={How_can_we_call_you} style={styles.nameText} />
        <Image source={bottom} style={styles.bottom} />
        <TextInput
          style={styles.inputContainer}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          placeholder="Enter your name here"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />

        <TouchableOpacity style={styles.button} onPress={this.saveName}>
          <Text style={styles.buttonText}>Continue</Text>
          <AntDesign
            style={{ alignSelf: 'center', color: '#F55963' }}
            name="arrowright"
            size={18}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  nameText: {
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height / 3 - 150,
    marginBottom: 27,
    marginLeft: 38,
  },
  button: {
    borderWidth: 2,
    width: 120,
    borderRadius: 5,
    borderColor: '#F55963',
    position: 'absolute',
    right: 30,
    top: Dimensions.get('window').height - 50,
    flex: 1,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
    paddingLeft: 10,
    color: '#F55963',
  },
  inputContainer: {
    color: '#f88c70',
    fontSize: 21,
    margin: 15,
    height: 60,
    borderBottomWidth: 5,
    borderBottomColor: '#f2f7fd',
    padding: 15,
    width: '85%',
  },
  buttonContainer: {
    backgroundColor: '#45CE30',
    borderRadius: 10,
    padding: 8,
    height: 40,
    alignContent: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    width: '20%',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
});
