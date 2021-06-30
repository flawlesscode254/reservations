import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import {Ionicons} from '@expo/vector-icons'


const fruits = () => {
    return (
        <View>
             <ImageBackground style={{
            width: 200,
            height: 300,
            justifyContent: "flex-end",
            marginLeft: 20,
            marginRight: 20
          }} imageStyle={{
            borderRadius: 20
          }} source={{ uri: "https://d2j6dbq0eux0bg.cloudfront.net/images/14683497/947969437.jpg" }}>
            <View style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginHorizontal: 20,
              marginBottom: 10,
              backgroundColor: "#FFF",
              paddingVertical: 10
            }}>
              <View>
                <Text style={{
                  fontWeight: "bold"
                }}>Apple Juice</Text>
                <Text style={{
                  fontWeight: "bold"
                }}>$8.65</Text>
              </View>
              <Ionicons name="cart-outline" size={24} color="black" />
            </View>
          </ImageBackground>
        </View>
    )
}

export default fruits

const styles = StyleSheet.create({})
