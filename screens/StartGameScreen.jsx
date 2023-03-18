import { View, Text } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View>
      <Text>StartGameScreen</Text>
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}
