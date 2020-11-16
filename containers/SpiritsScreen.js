import React, {Component} from 'react';
import {View, StyleSheet,TouchableOpacity, SafeAreaView,ScrollView,Dimensions, StatusBar} from 'react-native';

import styled from 'styled-components';
import {Font} from 'expo';
import { AntDesign } from '@expo/vector-icons';

import { spirits } from '../Data'
import Products from '../components/Products'
import { connect } from 'react-redux'

// import AsyncStorage
import AsyncStorage from '@react-native-community/async-storage';
// import icons
import Icon from 'react-native-vector-icons/Ionicons';

class SpiritsScreen extends Component{


  render(){



    return (

      <Container style={{paddingVertical: 20}}>
      <MenuBackground source={require("../assets/images/menu/spirits.jpg")}>

          <SafeAreaView>
              <MenuBar>
                <Back>
                  <TouchableOpacity
                      onPress={() => this.props.navigation.navigate ('menu')}
                    >
                    <AntDesign name="arrowleft" size={24} color="#FFF"/>
                  </TouchableOpacity>
                </Back>
              </MenuBar>
              <MainRecipe>


              </MainRecipe>
          </SafeAreaView>
      </MenuBackground>
        <StatusBar barStyle="light-content"/>

            <RecipeContainer>
                <Text dark heavy large> Spirits & Whisky Menu </Text>

                  <MenuContainer>
                    <ScrollView>
                    <Products products={spirits} onPress={this.props.addItemToCart} />
                  </ScrollView>
                </MenuContainer>
            </RecipeContainer>
      </Container>
)

}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product },
        alert("Item added to cart!!")
        )
    }
}

export default connect(null, mapDispatchToProps)(SpiritsScreen);

const Container = styled.View`

  flex: 1;
  background-color: #FFF;

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

const MenuBackground = styled.ImageBackground`
width: 50%;
height: 50%;
margin: -5%;
margin-left: 25%;

`;

const MenuBar = styled.View`

flex-direction: row;
justify-content: space-between;
padding:16px;

`;

const Back = styled.View`

flex-direction: row;
align-items: center;

`;

const MainRecipe = styled.View`

padding: 0 4px;
margin: 25px 0 4px 0;

`;

const Divider = styled.View`

border-bottom-color: #fff;
border-bottom-width: 2px;
width: 150px;
margin: 8px 0;

`;

const Button = styled.TouchableOpacity`

background-color: rgba(255, 255, 255, 0);
margin: 8px 0;
align-self: flex-start;
padding: 3px 6px;
border-radius: 100px;
`;

const RecipeContainer = styled.View`

background-color: #fff;
margin-top: -24px;
align-self: flex-start;
padding-horizontal:32px;
padding-top: 16px;
border-top-right-radius: 24px;
border-top-left-radius: 24px;
width: 100%;
height: 57%;

shadow-color: black;
shadow-opacity: 0.4;
shadow-radius: 7.49px;


`;

const MenuContainer = styled.View`

margin-top: 16px;

`;

const Menu = styled.View`

  flex-direction: row;
  margin-bottom: 16px;

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
