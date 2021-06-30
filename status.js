import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const status = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20,
        marginTop: 20,
      }}
    >
      <Image
        style={{
          height: 45,
          width: 45,
          borderRadius: 999,
          borderWidth: 2,
          borderColor: "gray",
        }}
        source={{
          uri: "https://d2j6dbq0eux0bg.cloudfront.net/images/14683497/947969437.jpg",
        }}
      />
      <Text
        style={{
          color: "#FFF",
          marginTop: 10,
        }}
      >
        Avocado
      </Text>
    </View>
  );
};

export default status;

const styles = StyleSheet.create({});
