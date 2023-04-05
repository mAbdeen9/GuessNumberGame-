import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

const deviceWidth = Dimensions.get("screen").width;

const style = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 300,
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
