import React, { Component } from "react";
import {
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Button,
    FlatList,

} from "react-native";


import styled from 'styled-components';
import {Font} from 'expo';
import { AntDesign } from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/Ionicons';

class Products extends Component {

    renderProducts = (products) => {
        console.log(products)
        return products.map((item, index) => {
            return (

                  <Menu key={index} style={{ padding: 0.5 }}>

                    <MenuImage source={item.image}/>
                      <MenuInfor>
                        <Text dark bold>{item.name}</Text>
                        <Text dark small>{item.info}</Text>
                        <Text dark bold>${item.price}</Text>
                      </MenuInfor>
                      <TouchableOpacity
                        onPress={() => this.props.onPress(item)}
                        style={{alignItems: 'flex-end', justifyContent: 'flex-end', alignSelf: 'flex-end'}}
                      >
                        <AntDesign name="pluscircleo" size={25} color="#000" />
                      </TouchableOpacity>
                    </Menu>

            )
        })
    }

    render() {
        return (
            <View >
                {this.renderProducts(this.props.products)}
            </View>
        );
    }
}
export default Products;

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

padding: 0 4px;
margin: 25px 0 4px 0;

`;

const Divider = styled.View`

border-bottom-color: #fff;
border-bottom-width: 2px;
width: 150px;
margin: 8px 0;

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
height: 50%

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
