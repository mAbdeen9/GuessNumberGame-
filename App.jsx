import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { colors } from "./utils/colors";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [numberOfTries, setNumberOfTries] = useState(0);

  const [fontsLoading] = useFonts({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoading) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  const pickNumberHandler = (num) => setPickedNumber(num);
  const gameOverHandler = () => setGameOver(true);
  const resetGame = () => {
    setPickedNumber("");
    setGameOver(false);
  };

  let screen = <StartGameScreen pickedNumber={pickNumberHandler} />;

  if (pickedNumber)
    screen = (
      <GameScreen
        numberOfTriesData={(data) => setNumberOfTries(data)}
        gameOver={gameOverHandler}
        pickedNumber={pickedNumber}
      />
    );
  if (gameOver)
    screen = (
      <GameOverScreen
        numberOfTries={numberOfTries}
        pickedNumber={pickedNumber}
        resetGameHandler={resetGame}
      />
    );

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
