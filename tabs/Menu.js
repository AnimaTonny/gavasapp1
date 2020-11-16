import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,StatusBar} from 'react-native';

class Menu extends Component{

  render(){

    return (
      <View style={styles.container}>

        <View style={styles.TopRow}>
          <View style={styles.views}>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('Stews')}
            style={styles.button}>
            <View style={{height: '100%', width: 100, marginLeft: 10, borderRadius:20 ,borderWidth: 0.5, borderColor: '#dddddd'}}>
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontWeight: 'bold'}}> Stews</Text>
                </View>
                <Image source={require('../assets/images/Beefstew2.jpg')} style={{ borderRadius: 20,flex:1, width: 140, height: null, resizeMode: 'cover'}}/>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.views}>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('Fromthegrill')}
            style={styles.button}>
            <View style={{height: '100%', width: 100, marginLeft: 10, borderRadius:20 ,borderWidth: 0.5, borderColor: '#dddddd'}}>
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontWeight: 'bold'}}> From The Grill</Text>
                </View>
                <Image source={require('../assets/images/Sausage3.jpg')} style={{ borderRadius: 20,flex:1, width: 140, height: null, resizeMode: 'cover'}}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.MiddleRow}>
        <View style={styles.views}>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate ('Combo')}
          style={styles.button}>
          <View style={{height: '100%', width: 100, marginLeft: 10, borderRadius:20 ,borderWidth: 0.5, borderColor: '#dddddd'}}>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold'}}> Combos</Text>
              </View>
              <Image source={require('../assets/images/MonthEndDietTabie.jpg')} style={{ borderRadius: 20,flex:1, width: 140, height: null, resizeMode: 'cover'}}/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.views}>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate ('Drinks')}
          style={styles.button}>
          <View style={{height: '100%', width: 100, marginLeft: 10, borderRadius:20 ,borderWidth: 0.5, borderColor: '#dddddd'}}>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold'}}> Drinks</Text>
              </View>
              <Image source={require('../assets/images/menu/drinks1.jpg')} style={{ borderRadius: 20,flex:1, width: 120, height: null, resizeMode: 'cover'}}/>
            </View>
          </TouchableOpacity>
        </View>
        </View>

        <View style={styles.BottomRow}>
        <View style={styles.views}>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate ('Spirits')}
          style={styles.button}>
          <View style={{height: '100%', width: 100, marginLeft: 10, borderRadius:20 ,borderWidth: 0.5, borderColor: '#dddddd'}}>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold'}}> Spirits & Whisky</Text>
              </View>
              <Image source={require('../assets/images/menu/whiskys.jpg')} style={{ borderRadius: 20,flex:1, width: null, height: null, resizeMode: 'cover'}}/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.views}>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate ('Beers')}
          style={styles.button}>
          <View style={{height: '100%', width: 100, marginLeft: 10, borderRadius:20 ,borderWidth: 0.5, borderColor: '#dddddd'}}>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold'}}> Wines and Beer</Text>
              </View>
          <Image source={require('../assets/images/menu/wine1.jpg')} style={{ borderRadius: 20,flex:1, width: null, height: null, resizeMode: 'cover'}}/>
            </View>
          </TouchableOpacity>
        </View>
        </View>

      </View>
    );
  }
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },

  TopRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    marginVertical: 10
  },

  MiddleRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10
  },

  BottomRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10

  },

  views: {
    flex:2,
    borderRadius:20,
    marginHorizontal: 10

  },

button: {
  shadowColor: "#000",
  shadowOffset: {
  	                 width: 0,
	                   height: 6,
                },

  shadowOpacity: 0.37,
  shadowRadius: 7.49,
  elevation: 12,

}

});
