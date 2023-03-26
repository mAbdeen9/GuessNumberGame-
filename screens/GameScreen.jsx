import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";
let firstGuess;
export default function GameScreen({ pickedNumber }) {
  const [currentGuess, setCurrentGuess] = useState("");
  let initialGuess;

  useEffect(() => {
    initialGuess = generateRandomBetween(1, 100, pickedNumber);
    setCurrentGuess(initialGuess);
  }, []);

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

    if (status === "bigger") {
      setCurrentGuess(generateRandomBetween(currentGuess, 100, pickedNumber));
      return;
    }
    if (status === "smaller") {
      setCurrentGuess(generateRandomBetween(1, currentGuess, pickedNumber));
      return;
    }
  };

  return (
    <View style={style.container}>
      <Title>Opponents guess 🔮 </Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text style={style.text}>Higher or lower? 🤔</Text>
      </View>
      <View>
        <PrimaryButton onPress={guessNumberHandler.bind(this, "bigger")}>
          ✚
        </PrimaryButton>
        <PrimaryButton onPress={guessNumberHandler.bind(this, "smaller")}>
          −
        </PrimaryButton>
      </View>
      <View>
        <Text>Log rounds</Text>
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
  text: {
    fontSize: 28,
    color: "white",
    margin: 6,
    padding: 16,
    textAlign: "center",
  },
});

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude && firstGuess == "") {
    return generateRandomBetween(min, max, exclude);
  } else {
    firstGuess = "1";
    return rndNum;
  }
}
