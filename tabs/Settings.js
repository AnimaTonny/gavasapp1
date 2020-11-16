import React, {Component} from 'react';
import {View, Text,TextInput, Image, StyleSheet, TouchableOpacity, Button,StatusBar} from 'react-native';
//import ImagePicker from "react-native-image-picker"

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import AsyncStorage from '@react-native-community/async-storage';


class Settings extends Component{

  state = {
    image: null,
    name:"",
  };

  render(){






  let { image } = this.state;

    return (

    <View style={styles.container}>
    <StatusBar/>
      <View style={{ flex:3, paddingHorizontal: 40, height: '100%', width: '75%', marginLeft: 10, borderRadius:20 ,borderWidth: 0.5, borderColor: '#fff' }}>
        <Button title="Pick an image from camera roll" onPress={this._pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>

      <View style={{flex:1,paddingHorizontal: 95, height: '75%', width: '75%', marginLeft: 10, borderRadius:20 ,borderWidth: 0.5, borderColor: '#fff'}}>
      <TextInput

        style={{fontSize: 20, fontWeight: 'bold'}}
        placeholder="Enter Name"
        returnKeyLabel = {"next"}
        onChangeText={(text) => this.setState({name:text})}
      />
      
      </View>

      

      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>About</Text>
        <Text> Gava's App Ver 1.0.0</Text>
      </View>

    </View>

    );
  }


    componentDidMount() {
      this.getPermissionAsync();
    }

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
          this.setState({ image: result.uri });
        }

        console.log(result);
      } catch (E) {
        console.log(E);
      }
    };


}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50

  },

  button: {
    backgroundColor: "#f04135",
    borderRadius: 50,
    width: 80,
    height: 30,
    paddingTop: 8,
  }


});
