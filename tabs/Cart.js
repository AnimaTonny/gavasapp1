
import React, {Component, useState} from 'react';
import { View, TextInput, Platform, Image, TouchableWithoutFeedback, Keyboard, Alert, ScrollView, Modal, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import {Provider} from 'react-redux'
import store from '../store'
import Products from '../components/Products'
import { connect } from 'react-redux'
import styled from 'styled-components';

import InputScrollView from 'react-native-input-scroll-view';
import KeyboardAdaptableView from "react-native-keyboard-adaptable-view";
import CheckoutForm from '../screens/CheckoutForm'

import { sendGridEmail } from 'react-native-sendgrid';

const SENDGRIDAPIKEY = "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";
const FROMEMAIL = "tonnychinaka@animatwebservices.co.zw";
const TOMEMAIL = "tonnypchinaka@gmail.com";
const SUBJECT = "You have a new Order";

var { width } = Dimensions.get("window")
// import icons
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import { AntDesign } from '@expo/vector-icons';


const key = 'order';

class Cart extends Component{

constructor(props) {
   super(props);
   this.state = {
   foodOrder:[],
   f1:1,
   name : "",
   email: "",
   phone: "",
   address: "",
   text:"",
   option:"",
   sum:"",
   isVisible: false, //state of modal default false
  };
}

sendEmail = () => {

  const Order = 
  "Contact Data: " + this.state.name
  +" Mail: "+ this.state.email
  +" Phone: "+this.state.phone
  +" Address: "+this.state.address
  +" Order: "+this.state.foodOrder.name
  +" Quantity: "+this.state.f1
  +" Amount: $ "+this.state.amount
  +" Option: "+this.state.option

  const sendRequest = sendGridEmail(SENDGRIDAPIKEY, TOMEMAIL, FROMEMAIL, SUBJECT, Order )
      sendRequest.then((response) => {
          console.log("Success")
      }).catch((error) =>{
          console.log(error)
      });
    }
   
      render() {

          console.log(this.props.cartItems)
    //      const cartItems = this.props.cartItems;
          const cartLength = this.props.cartItems.length;
          const total = this.props.cartItems.price;

          let sum = this.props.cartItems.reduce((a,b)=> a +(b.price || 0),0);

          return (

            <MainContainer>
              <View style={{flex:3, backgroundColor:"#faf6f5", borderRadius:12}}>
                <ScrollView>

                {this.props.cartItems.map((item, index) => {
                    return (


                          <Menu key={index} style={{ padding: 0.5 }}>

                            <MenuImage source={item.image}/>
                              <MenuInfor>
                                <Text dark bold>{item.name}</Text>
                                <Text dark small>{item.info}</Text>
                                <Text dark bold>${item.price}</Text>
                              </MenuInfor>
                              <TouchableOpacity
                                onPress={this.props.removeItem.id}
                              
                                style={{alignItems: 'flex-end', justifyContent: 'flex-end', alignSelf: 'flex-end'}}
                              >
                                <AntDesign name="minuscircleo" size={30} color="#000" />
                              </TouchableOpacity>
                              </Menu>
                    )
                })}
                </ScrollView>

                </View>
                  <Text  dark large heavy> Your Total is : ${sum}</Text>
                      <TouchableOpacity
                        onPress= {this.props.onClearCart}
                        products={this.props.cartItems.id}
                        style={{alignItems: 'flex-end', justifyContent: 'flex-end', alignSelf: 'flex-end'}}
                      >
                        <AntDesign name="delete" size={25} color="#000" />
                      </TouchableOpacity>
                    <View>
                        <TouchableOpacity 
                          style={{
                          backgroundColor:"red",
                          width:width-40,
                          alignItems:'center',
                          padding:10,
                          borderRadius:5,
                          margin:20
                          }}
                          onPress = {() => {this.setState({ isVisible: true})}}
                        >
                          <Text style={{
                                fontSize:24,
                                fontWeight:"bold",
                                color:'white'
                                }}>
                                    PROCEED
                          </Text>
                      </TouchableOpacity>
                    </View>
                  <Modal animationType="slide"
                    transparent={true}
                    visible={this.state.isVisible}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                    }}
                  >
                      <TouchableWithoutFeedback
                        onPress = {() => {
                        Keyboard.dismiss();
                          }}
                      > 
                        <View style={{flex:1,margin:30, justifyContent:"center", backgroundColor:"pink"}}>
                          <TouchableOpacity
                            onPress = {() => {
                            this.setState({ isVisible:!this.state.isVisible})}}
                            style={{alignItems: 'flex-end',margin:20, justifyContent: 'flex-end', alignSelf: 'flex-end'}}
                          >
                              <AntDesign name="close" size={40} color="#000" />
                          </TouchableOpacity>
      
                              <CheckoutForm/>
                        </View>
                      </TouchableWithoutFeedback>
                  </Modal>
      </MainContainer>

          );       
      }
    }

    const mapStateToProps = (state) => {
      return {
          cartItems: state
      }
    }

    const mapDispatchToProps = (dispatch) => {
      return {
          removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product },
          
          alert("Item Removed from Cart!!") 
          
          ),

          onClearCart: (product) => dispatch({type: 'CLEAR_CART', payload: product } )

        }
    }




    export default connect(mapStateToProps, mapDispatchToProps)
    (Cart);


    const MainContainer = styled.View`

    background-color: #fff;

    align-self: flex-start;
    padding-horizontal:12px;
    padding-top: 40px;
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
    width: 100%;
    height: 100%

    `;

    const Container = styled.View`

    background-color: gray;

    align-self: flex-start;
    padding-horizontal:12px;
    padding-top: 40px;
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
    width: 100%;
    height: 100%

    `;

    const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
      }
    });

    const Menu = styled.View`

    flex-direction: row;
    margin-bottom: 16px;

    `;

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


    const MenuImage = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 8px;


    `;
    const MenuInfor= styled.View`
    flex: 1;
    margin-left: 12px;

    `;
