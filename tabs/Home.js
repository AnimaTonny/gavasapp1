import React, {Component} from 'react';
import {View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
  } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import OfflineNotice from '../OfflineNotice'
import { NetInfo } from 'react-native-netinfo'

import styled from 'styled-components';


class Home extends Component{

  render(){
    return (

    <View style={styles.container}>

      <View style={styles.viewOne}>
          <HomeBackground source={require('../assets/images/maindishes.png')}
              style={{ width:'100%', height: '100%', }}>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('Menu')}
            style={styles.button}>
              <LinearGradient colors={['red','white','red']}
                start={[0, 0.5]}
                end={[1, 0.5]}
                style={{ padding: 2, alignItems: 'center', borderRadius: 5,}}>
                <View style={{margin:0.5, backgroundColor: 'pink', borderRadius: 5,}}>
                  <Text style={styles.buttonText}bold heavy>Order Now!!!</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </HomeBackground>
        </View>


  <Divider/>
        <View style={styles.viewTwo} >
          <View style={{alignItems: 'center', paddingTop:-50 }}>
            <Text bold title style={{color:'black'}}>Favorites</Text>
          </View>
          <ScrollView horizontal={true}>
              <View style={{ height: 110, width: 110, marginLeft: 10, borderWidth: 0.5, borderColor: '#dddddd'}}>
                <View style={{flex: 2}}>
                  <Image source={require('../assets/images/beans.jpg')} style={{flex:1, width: null, height: null, resizeMode: 'cover'}}/>

                </View>
                <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                  <Text bold style={{color:'black'}}>Pork Bones</Text>
                </View>
              </View>

              <View style={{ height: 110, width: 110, marginLeft: 10, borderWidth: 0.5, borderColor: '#dddddd'}}>
                <View style={{flex: 2}}>
                  <Image source={require('../assets/images/fish.jpg')} style={{flex:1, width: null, height: null, resizeMode: 'cover'}}/>

                </View>
                <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                  <Text bold style={{color:'black'}}>Kariba Bream</Text>
                </View>
              </View>
              <View style={{ height: 110, width: 110, marginLeft: 10, borderWidth: 0.5, borderColor: '#dddddd'}}>
                <View style={{flex: 2}}>
                  <Image source={require('../assets/images/sadzaandbeef.jpg')} style={{flex:1, width: null, height: null, resizeMode: 'cover'}}/>
                </View>
                <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                  <Text bold style={{color:'black'}}>Mutongi Gava</Text>
                </View>
              </View>

          </ScrollView>
        </View>
    <Divider/>
        <View style={styles.viewThree}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate ('Merch')}
        >
          <View style={{ height: '130%', width: 100, marginLeft: 10, borderWidth: 0.5, borderColor: '#dddddd'}}>
            <View style={{alignItems: 'center'}}>
              <Text bold style={{color:'black'}}>Our Merchandise</Text>
            </View>
            <View style={{flex: 2}}>
              <Image source={require('../assets/images/menu/merchheader.jpg')} style={{flex:1, width: null, height: null, resizeMode: 'contain'}}/>
            </View>

          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate ('Rewards')}
        >
          <View style={{ height: '130%', width: 100, marginLeft: 10, borderWidth: 0.5, borderColor: '#dddddd'}}>
            <View style={{alignItems: 'center'}}>
              <Text bold style={{color:'black'}}>Rewards</Text>
            </View>
            <View style={{flex: 2}}>
              <Image source={require('../assets/images/trophy.jpg')} style={{flex:1, width: null, height: null, resizeMode: 'cover'}}/>
            </View>
          </View>
        </TouchableOpacity>
        </View>
    </View>


    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5,
    paddingVertical: 20,
  },


viewOne: {
  flex: 3,
  //backgroundColor: 'green',
  width: '100%',
  borderRadius: 50,
  shadowColor: "red",

  shadowOffset: {
  	                 width: 1,
	                   height: 8,
                },

  shadowOpacity: 0.37,
  shadowRadius: 7.49,
  elevation: 12,

},

viewTwo: {
  flex: 2,
  justifyContent: 'space-around',

  shadowColor: "#000",
  shadowOffset: {
  	                 width: 0,
	                   height: 11,
                },

  shadowOpacity: 0.50,
  shadowRadius: 7.49,
  elevation: 12,

},

viewThree: {
  flex: 1,
  flexDirection: 'row',

  padding: 10,
  justifyContent: 'space-around',
  shadowColor: "#000",
  shadowOffset: {
                     width: 0,
                     height: 6,
                },

  shadowOpacity: 0.37,
  shadowRadius: 7.49,
  elevation: 12,


},


button: {

    paddingTop:"30%",
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
  //  backgroundColor: 'transparent',
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 6,
    margin: 10,

  },

});

const Text = styled.Text`

  color: ${(props) => props.dark ? "#000" : "#FFF"};
/**/

  ${({title, large, small}) => {

    switch(true){

      case title:
        return `font-size: 32px`;
      case large:
        return `font-size: 20px`;
      case small:
        return `font-size: 13px`;

      }
    }}

  ${({ bold, heavy}) => {
    switch(true){
      case bold:
        return `font-weight: 600`;
      case heavy:
        return `font-weight: 700`;
    }
  }}

`;

const HomeBackground = styled.ImageBackground`
  width: 100%

`;

const Divider = styled.View`

border-bottom-color: gray;
border-bottom-width: 2px;
width: 300px;
margin: 8px 0;


`;
