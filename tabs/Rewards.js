import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Rewards(navigation) {
 
    return (
      <View style={styles.container}>
          <View style={{flex:1, justifyContent:"center"}}>
              <Text>Your Current Rewards</Text>
          </View>
          <View style={{flex:1, justifyContent:"center", alignSelf:"center", alignContent:"center"}}>
             <Text>You are Rewarded 1 point for each $1 you spend</Text>
              <Text>You are rewarded a $10 meal voucher when you reach 100 points</Text>
          </View>
          <View style={{flex:3, justifyContent: 'center', alignItems: 'center', borderRadius: 50, margin: 0.5}}>
              <Text style={{fontWeight:"bold", fontSize: 56,}}>0 / 100 </Text>
          </View>

      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  }
});
