import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class CheckoutScreen extends Component{
  render(){
    return (
      <View style={styles.container}>
          <View style={styles.message}>
              <Text style={{fontWeight:"bold", fontSize: 26,}}>Thank You for Ordering with GavasApp you have been awarded ..... points</Text>
              <View style={{height:30}} />
              <Text style={{fontWeight:"bold", fontSize: 20,}}>Your Order is being prepared</Text>

              <View style={{height:80}} />
              <Text style={{fontWeight:"bold", fontSize: 26,}}>You shall be contacted Soon!!</Text>
          </View>
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center', borderRadius: 50, margin: 0.5}}>
              <Text style={{fontWeight:"bold", fontSize: 56,}}> 02 </Text>
          </View>

      </View>
    );
  }
}

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  message: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
    	                 width: 0,
  	                   height: 6,
                  },

    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    width: 300,
    paddingTop: 30
  },
});
