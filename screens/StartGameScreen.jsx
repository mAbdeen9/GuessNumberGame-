import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import { colors } from "../utils/colors";
import {
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

export default function StartGameScreen({ pickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { height } = useWindowDimensions();

  const marginTopAuto = { marginTop: height < 400 ? -15 : 30 };
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
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <View style={[style.container, marginTopAuto]}>
          <Text style={style.title}>Guess my number 🤔</Text>
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
              <PrimaryButton
                onPress={confirmHandler}
                color={colors.btnLightGreen}
              >
                Confirm
              </PrimaryButton>
              <PrimaryButton onPress={resetInput} color={colors.btnLightRed}>
                Reset
              </PrimaryButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 40,
    fontFamily: "poppins-bold",
  },
  innerText: {
    textAlign: "center",
    fontSize: 22,
    color: "white",
    fontFamily: "poppins-regular",
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
    maxWidth: "90%",
    width: 450,
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
