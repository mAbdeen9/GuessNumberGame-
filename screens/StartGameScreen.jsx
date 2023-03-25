import { View, TextInput, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen({ pickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const enteredNumberHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInput = () => setEnteredNumber("");

  const confirmHandler = () => {
    if (isNaN(parseInt(enteredNumber))) {
      Alert.alert("Wrong input", "Please enter a valid number between 1 - 99", [
        { text: "ok", style: "default", onPress: resetInput },
      ]);
      return;
    }

    pickedNumber(enteredNumber);
  };

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={enteredNumberHandler}
      />
      <View style={style.btnBox}>
        <PrimaryButton onPress={confirmHandler} color={"#5FBCA0"}>
          Confirm
        </PrimaryButton>
        <PrimaryButton onPress={resetInput} color="#FF6B89">
          Reset
        </PrimaryButton>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#262A33",
    padding: 16,
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
    marginBottom: 5,
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
