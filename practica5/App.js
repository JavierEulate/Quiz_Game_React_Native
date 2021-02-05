import React from "react";
import ReduxProvider from "./app/redux/ReduxProvider";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider
        style={{
          backgroundColor: "#3D3D3D",
        }}
      >
        <ReduxProvider />
      </SafeAreaProvider>
    );
  }
}
