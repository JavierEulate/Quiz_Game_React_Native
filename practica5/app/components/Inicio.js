import React from "react";
import { Text, View } from "react-native";

export default class Inicio extends React.Component {
  render() {
    return (
      <View class="container1">
        <Text class="bienvenido">BIENVENIDO AL MEJOR QUIZ</Text>
        <a class="btn btn-primary btn-rounded shadow" href={"/#/game/" + 1}>
          EMPEZAR
        </a>
      </View>
    );
  }
}
