import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: 150,
    margin: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontFamily: "poppins-regular",
  },
  highlightText: {
    fontFamily: "poppins-bold",
    color: "#F57F17",
  },
});
export default function GameOverScreen() {
  return (
    <View style={style.container}>
      <Title>Game over</Title>
      <Image style={style.img} source={require("../assets/success.png")} />
      <Text style={style.text}>
        Your phone needed <Text style={style.highlightText}>X</Text> rounds to
        guess the number
        <Text style={style.highlightText}> Y</Text>.
      </Text>

      <PrimaryButton width={170} color="#F57F17" size={25}>
        New game
      </PrimaryButton>
    </View>
  );
}
