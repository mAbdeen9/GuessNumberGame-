import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StartGameScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1D23",
  },
});
