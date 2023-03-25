import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState("");
  const pickNumberHandler = (num) => setPickedNumber(num);
  let screen = <StartGameScreen pickedNumber={pickNumberHandler} />;
  if (pickedNumber) screen = <GameScreen />;

  return (
    <SafeAreaView style={styles.container}>
      {screen}
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1D23",
  },
});
