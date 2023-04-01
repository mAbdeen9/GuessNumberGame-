import { Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../utils/colors";

const Title = ({ children, color }) => {
  const style = StyleSheet.create({
    title: {
      fontSize: 29,
      color: color || colors.title,
      textAlign: "center",
      padding: 10,
      marginBottom: 20,
      fontFamily: "poppins-bold",
      borderWidth: 1,
      borderColor: colors.btnLightGreen,
      borderRadius: 10,
    },
  });

  return <Text style={style.title}>{children}</Text>;
};

export default Title;
