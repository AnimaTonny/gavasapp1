import React, {Component, useState} from 'react';
import { Stylesheet, Button, TextInput, Dimensions, View, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

var { width } = Dimensions.get("window")

const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required()
      .label('name'),
    phone: yup
      .string()
      .required()
      .label('phone'),
    email: yup
      .string()
      .required()
      .label('email'),
    address: yup
      .string()
      .required()
      .label('address'),
    option: yup
      .string()
      .required()
      .label('option'),

  });

  

export default function CheckoutForm({ navigation }) {
 
    return(
        
        <View >
            <Formik
                initialValues={{name:'', phone:'', email:'', address:'', option:'' }}
                onSubmit={(values) => {
                this.sendEmail
                }}
            >
                {(props) => (

                  <View style={{justifyContent: 'center',alignContent: 'center',marginLeft:20}} >
                    
                   <Text heavy large > Fill the form *</Text>
                <View style={{height:10}} />
                   <TextInput
                     adaptKeyboard
                     style={{padding: 10,borderRadius: 10,height:"7%",width: "90%", backgroundColor: "white"}}
                     placeholder="Enter Name"
                     onChangeText={props.handleChange('name')}
                     value={props.values.name}
                     validationSchema={validationSchema}
                    />
                    <Text style={{ color: 'red' }}>{props.errors.name}</Text>

               <View style={{height:10}} />
                   <TextInput
                     style={{padding: 10,borderRadius: 10,height:"7%",width: "90%", backgroundColor: "white"}}
                     placeholder="Enter Phone"
                     onChangeText={props.handleChange('phone')}
                     value={props.values.phone}
                     validationSchema={validationSchema}
                   />
                   <Text style={{ color: 'red' }}>{props.errors.phone}</Text>
               <View style={{height:10}} />
                   <TextInput
                     style={{padding: 10,borderRadius: 10,height:"7%",width: "90%", backgroundColor: "white"}}
                     placeholder="Enter Email"
                     onChangeText={props.handleChange('email')}
                     value={props.values.email}
                     validationSchema={validationSchema}
                    />
                    <Text style={{ color: 'red' }}>{props.errors.email}</Text>
               <View style={{height:10}} />
                   <TextInput
                     style={{padding: 10,borderRadius: 10,height:"7%",width: "90%", backgroundColor: "white"}}
                     placeholder="Enter Option (Takeaway, Delivery or Eat in)"
                     onChangeText={props.handleChange('option')}
                     value={props.values.option}
                     validationSchema={validationSchema}
                    />
                    <Text style={{ color: 'red' }}>{props.errors.option}</Text>               
               <View style={{height:10}} />
                   <TextInput
                     style={{padding: 10,borderRadius: 10,height:"10%",width: "90%", backgroundColor: "white"}}
                     placeholder="Enter Address"
                     onChangeText={props.handleChange('address')}
                     value={props.values.address}
                     validationSchema={validationSchema}
                    />
                <View style={{height:70}} />
                <TouchableOpacity style={{
                          backgroundColor:"red",
                          width:width-190,
                          alignItems:'center',
                          padding:10,
                          borderRadius:5,
                          margin:20,
                          }}
                         
                          onSubmit={props.handleSubmit}
                        >
                      <Text style={{
                          fontSize:24,
                          fontWeight:"bold",
                          color:'white'
                        }}>
                        CHECKOUT
                      </Text>
                </TouchableOpacity>
                
               
             </View>

                )}
            </Formik>
        </View>
    )

}


const Text = styled.Text`

color: ${(props) => props.dark ? "#000" : "#121110"};
/**/

${({title, large, small,}) => {

  switch(true){

    case title:

      return `font-size: 32px`;

    case large:

      return `font-size: 35px`;

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

