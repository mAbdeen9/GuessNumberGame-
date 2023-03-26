import { Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../utils/colors";

const Title = ({ children }) => {
  return <Text style={style.title}>{children}</Text>;
};

export default Title;

const style = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.title,
    textAlign: "center",
    padding: 6,
    marginBottom: 10,
  },
});
