import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function PrimaryButton({
  children,
  color = "",
  onPress,
  size = 20,
}) {
  const style = StyleSheet.create({
    container: {
      backgroundColor: `${color}`,
      paddingHorizontal: 16,
      paddingVertical: 8,
      alignItems: "center",
      borderRadius: 32,
      margin: 5,
      width: 100,
      alignSelf: "center",
      overflow: "hidden",
    },
    btn: {
      textAlign: "center ",
      paddingHorizontal: 1,
      width: 120,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: size,
      color: "white",
      fontWeight: "bold",
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
