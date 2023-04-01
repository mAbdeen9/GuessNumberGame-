import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

const style = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
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
export default function GameOverScreen({
  resetGameHandler,
  pickedNumber,
  numberOfTries,
}) {
  return (
    <View style={style.container}>
      <Title>Game over</Title>
      <Image style={style.img} source={require("../assets/success.png")} />
      <Text style={style.text}>
        Your phone needed{" "}
        <Text style={style.highlightText}>{numberOfTries}</Text> rounds to guess
        the number
        <Text style={style.highlightText}> {pickedNumber}</Text>.
      </Text>
      <View style={{ marginTop: 20 }}>
        <PrimaryButton
          onPress={() => resetGameHandler()}
          width={170}
          color="#4153AF"
          size={25}
        >
          New game
        </PrimaryButton>
      </View>
    </View>
  );
}
