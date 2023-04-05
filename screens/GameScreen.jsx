import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../utils/colors";

let firstGuess;
let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({
  pickedNumber,
  gameOver,
  numberOfTriesData,
}) {
  const [currentGuess, setCurrentGuess] = useState("");
  const [numberOfTries, setNumberOfTries] = useState(0);
  let initialGuess;

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
    initialGuess = generateRandomBetween(1, 100, pickedNumber);
    setCurrentGuess(initialGuess);
  }, []);

  useEffect(() => {
    numberOfTriesData(numberOfTries);
  }, [numberOfTries]);

  useEffect(() => {
    if (currentGuess == pickedNumber) {
      gameOver();
    }
  }, [currentGuess]);

  const guessNumberHandler = (status) => {
    if (
      (status === "bigger" && pickedNumber < currentGuess) ||
      (status === "smaller" && pickedNumber > currentGuess)
    ) {
      return Alert.alert("don't lie!", "you know its wrong", [
        {
          text: "sorry!",
          style: "cancel",
        },
      ]);
    }

    if (status === "bigger") minBoundary = currentGuess;
    if (status === "smaller") maxBoundary = currentGuess;
    setNumberOfTries((cur) => {
      return cur + 1;
    });
    setCurrentGuess(
      generateRandomBetween(maxBoundary, minBoundary, pickedNumber)
    );
  };

  return (
    <View style={style.container}>
      <Title>Opponents guess 🔮 </Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={style.card}>
        <View>
          <Text style={style.text}>Higher or lower? 🤔</Text>
        </View>
        <View style={style.btnCard}>
          <PrimaryButton
            size={35}
            color={colors.blueLight}
            onPress={guessNumberHandler.bind(this, "bigger")}
          >
            <Ionicons size={30} name="md-add" />
          </PrimaryButton>
          <PrimaryButton
            size={35}
            color={colors.btnLightRed}
            onPress={guessNumberHandler.bind(this, "smaller")}
          >
            <Ionicons size={30} name="md-remove" />
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: colors.secondaryColor,
    marginTop: 30,
    borderRadius: 40,
    padding: 16,
  },
  btnCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "poppins-regular",
    color: "white",
    margin: 6,
    padding: 16,
  },
});

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude && firstGuess === "") {
    return generateRandomBetween(min, max, exclude);
  } else {
    firstGuess = "1";
    return rndNum;
  }
}
