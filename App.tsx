import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import RootStack from "./navigators/rootStack";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <RootStack />;
}
