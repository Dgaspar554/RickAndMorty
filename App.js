import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import { Provider } from "react-redux";
import { store } from "./src/store";
import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <NativeRouter>
      <Provider store={store}>
        <Main />
      </Provider>
    </NativeRouter>
  );
}
