import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import Status from './status';
import Fruits from './fruits'


export default function App() {
  return (
    <ScrollView style={{
      backgroundColor: "#151A2C"
    }}>
      <View style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20,
        marginHorizontal: 20
      }}>
        <Text style={{
          fontWeight: "bold",
          fontSize: 20,
          color: "#FFF"
        }}>JuiceUp</Text>
        <Image source={{ uri: "https://westgatelifecare.com.ng/wp-content/uploads/2021/04/CERES-APPLE-JUICE-250ML-CAN.jpg" }} 
          style={{
          width: 35,
          height: 35,
          borderRadius: 999
        }} />
      </View>
      <ScrollView horizontal={true}>
        <Status />
        <Status />
        <Status />
        <Status />
        <Status />
        <Status />
        <Status />
      </ScrollView>
      <View style={{
        marginHorizontal: 20,
        alignItems: "flex-start",
        marginTop: 30
      }}>
        <Text style={{
          color: "#FFF",
          fontWeight: "bold",
          fontSize: 20,
           letterSpacing: 5
        }}>Most Popular</Text>
      </View>
      <View style={{
        marginTop: 70
      }}>
        <ScrollView horizontal={true}>
         <Fruits />
         <Fruits />
         <Fruits />
         <Fruits />
         <Fruits />
         <Fruits />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
