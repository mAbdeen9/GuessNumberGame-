import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../utils/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={style.container}>
      <Text style={style.text}>{children}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderWidth: 1.4,
    borderRadius: 12,
    borderColor: colors.blueLight,
    width: 90,
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: colors.secondaryColor,
  },
  text: {
    fontSize: 42,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 4,
    margin: 4,
  },
});
