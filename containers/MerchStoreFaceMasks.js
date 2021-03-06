import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

class MerchStoreFaceMasks extends Component{

  render(){

    return (
      <View style={styles.container}>

        <View style={styles.TopRow}>
          <View style={styles.views}>
            <TouchableOpacity
            style={styles.button}>
            <View style={{height: '70%', width: 100,justifyContent: 'center', alignItems: 'center', alignContent: 'center',alignSelf: 'center', marginLeft: 10, borderRadius:20 ,borderWidth: 0.5, borderColor: '#dddddd'}}>
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontWeight: 'bold'}}> Red Face Mask</Text>
                </View>
                <Image source={require('../assets/images/menu/redmask.jpg')} style={{ borderRadius: 20,flex:1, width: 140, height: null, resizeMode: 'stretch'}}/>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.views}>
            <TouchableOpacity
            style={styles.button}>
            <View style={{height: '70%', width: 100,justifyContent: 'center', alignItems: 'center', alignContent: 'center',alignSelf: 'center', marginLeft: 10, borderRadius:20 ,borderWidth: 0.5, borderColor: '#dddddd'}}>
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontWeight: 'bold'}}> Black Face Masks</Text>
                </View>
                <Image source={require('../assets/images/menu/blackmask.jpg')} style={{ borderRadius: 20,flex:1, width: 140, height: null, resizeMode: 'cover'}}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>





      </View>
    );
  }
}

export default MerchStoreFaceMasks;

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
