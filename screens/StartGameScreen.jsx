import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import { colors } from "../utils/colors";

export default function StartGameScreen({ pickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const enteredNumberHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInput = () => setEnteredNumber("");

  const confirmHandler = () => {
    if (isNaN(parseInt(enteredNumber))) {
      Alert.alert("Wrong input", "Please enter a valid number between 1 - 99", [
        { text: "ok", style: "destructive", onPress: resetInput },
      ]);
      return;
    }

    pickedNumber(enteredNumber);
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>guess my number</Text>
      <View style={style.card}>
        <Text style={style.innerText}>Enter a number</Text>
        <TextInput
          style={style.input}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={enteredNumberHandler}
        />
        <View style={style.btnBox}>
          <PrimaryButton onPress={confirmHandler} color={colors.btnLightGreen}>
            Confirm
          </PrimaryButton>
          <PrimaryButton onPress={resetInput} color={colors.btnLightRed}>
            Reset
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    marginTop: 40,
  },
  innerText: {
    textAlign: "center",
    fontSize: 22,
    color: "white",
  },
  card: {
    backgroundColor: colors.secondaryColor,
    padding: 50,
    marginTop: 50,
    marginHorizontal: 20,
    borderRadius: 26,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  input: {
    height: 50,
    fontSize: 30,
    textAlign: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#DCDEF7",
    padding: 5,
    marginBottom: 15,
    width: 50,
    alignSelf: "center",
    color: "white",
  },
  btnBox: {
    flexDirection: "row",
    justifyContent: "center",

    alignItems: "center",
    margin: 5,
  },
});
