import React, {Component} from 'react';
import {View, StyleSheet,TouchableOpacity, SafeAreaView,ScrollView,Dimensions, StatusBar} from 'react-native';

import styled from 'styled-components';
import {Font} from 'expo';
import { AntDesign } from '@expo/vector-icons';

import { combos } from '../Data'
import Products from '../components/Products'
import { connect } from 'react-redux'

// import AsyncStorage
import AsyncStorage from '@react-native-community/async-storage';
// import icons
import Icon from 'react-native-vector-icons/Ionicons';

class ComboScreen extends Component{


  render(){



    return (

      <Container>

        <StatusBar barStyle="light-content"/>
          <MenuBackground source={require("../assets/images/menu/mutongigavaheader.jpg")}>

              <SafeAreaView>
                  <MenuBar>
                    <Back>
                      <TouchableOpacity
                          onPress={() => this.props.navigation.navigate ('menu')}
                        >
                        <AntDesign name="arrowleft" size={24} color="#FFF"/>
                        <Text bold style={{ marginLeft: 10}}> Back </Text>
                      </TouchableOpacity>
                    </Back>
                  </MenuBar>
                  <MainRecipe>
                      <Text title bold>Mutongi Gava</Text>
                        
                    
                  </MainRecipe>

              </SafeAreaView>
          </MenuBackground>
            <RecipeContainer>
                <Text dark heavy large> Combo </Text>
                  <MenuContainer>
                    <ScrollView>
                    <Products products={combos} onPress={this.props.addItemToCart} />

                  </ScrollView>
                </MenuContainer>
            </RecipeContainer>
      </Container>
    );

}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product },
        alert("Item added to cart!!"))
    }
}

export default connect(null, mapDispatchToProps)
(ComboScreen);


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
  width: 100%;
  height: 40%;

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

padding-top:90px;
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
margin-top: -20px;
align-self: flex-start;
padding-horizontal:15px;
padding-top: 8px;
border-top-right-radius: 24px;
border-top-left-radius: 24px;
width: 100%;
height: 56%
`;

const MenuContainer = styled.View`

margin-top: 6px;

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
