import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function PrimaryButton({
  children,
  color = "",
  onPress,
  size = 20,
  width = 120,
}) {
  const style = StyleSheet.create({
    container: {
      overflow: "hidden",
    },
    btn: {
      textAlign: "center ",
      height: 70,
      width: width || 120,
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      backgroundColor: `${color}`,
      paddingHorizontal: 12,
      paddingVertical: 16,
      borderRadius: 10,
      margin: 5,
    },
    text: {
      fontSize: size,
      color: "white",
      fontWeight: "bold",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      fontFamily: "poppins-bold",
    },
    pressed: {
      opacity: 0.4,
    },
  });

  const handlePress = () => onPress();
  return (
    <View style={style.container}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [style.pressed, style.btn] : style.btn
        }
        onPress={handlePress}
      >
        <Text style={style.text}>{children}</Text>
      </Pressable>
    </View>
  );
}
