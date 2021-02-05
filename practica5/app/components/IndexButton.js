import React from "react";
import { Button, View } from "react-native";

export default class IndexButton extends React.Component {
  render() {
    const quizzes = this.props.quizzes;
    const quizbutton = quizzes.map((quiz, i) => (
      <Button
        style={{}}
        color="#2196F3"
        key={(i + 1).toString()}
        title={(i + 1).toString()}
        onPress={() => this.props.indice(i)}
        disabled={this.props.currentQuiz === i}
      />
    ));

    return <View>{quizbutton}</View>;
  }
}
