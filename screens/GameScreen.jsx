import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";
import { colors } from "../utils/colors";

let firstGuess;
let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ pickedNumber, gameOver }) {
  const [currentGuess, setCurrentGuess] = useState("");
  let initialGuess;

  useEffect(() => {
    initialGuess = generateRandomBetween(1, 100, pickedNumber);
    setCurrentGuess(initialGuess);
  }, []);

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
        <View>
          <PrimaryButton
            size={35}
            color={colors.blueLight}
            onPress={guessNumberHandler.bind(this, "bigger")}
          >
            ✚
          </PrimaryButton>
          <PrimaryButton
            size={35}
            color={colors.btnLightRed}
            onPress={guessNumberHandler.bind(this, "smaller")}
          >
            −
          </PrimaryButton>
        </View>
        <View>
          <Text>Log rounds</Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 41,
  },
  card: {
    backgroundColor: colors.secondaryColor,
    marginTop: 30,
    borderRadius: 40,
    padding: 16,
  },
  text: {
    fontSize: 20,
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
