import { Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { colors } from "../../utils/colors";

const Title = ({ children, color }) => {
  const deviceWidth = Dimensions.get("screen").width;

  const style = StyleSheet.create({
    title: {
      fontSize: deviceWidth < 380 ? 26 : 29,
      color: color || colors.title,
      textAlign: "center",
      padding: deviceWidth < 380 ? 8 : 10,
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
