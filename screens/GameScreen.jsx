import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function GameScreen() {
  return (
    <View style={style.container}>
      <Text>Opponents Guess</Text>
      <View>
        <Text>Higher or lower?</Text>
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

    backgroundColor: "white",
  },
});
