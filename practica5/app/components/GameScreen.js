import React, { Component } from "react";
import { connect } from "react-redux";
import Game from "./Game";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  initQuizzes,
  questionAnswer,
  changeQuiz,
  submit,
} from "../redux/actions";
import { Button, View, Text } from "react-native";

class GameScreen extends React.Component {
  constructor(props) {
    super();
  }

  async componentDidMount() {
    this.fetching();
  }

  fetching = () => {
    fetch(
      "https://core.dit.upm.es/api/quizzes/random10wa?token=81d52404c0b23d72ef51"
    )
      .then((data) => data.json())
      .then((quizzes) => this.props.dispatch(initQuizzes(quizzes)))
      .catch((error) => console.log(error));
  };

  save(value) {
    try {
      const jsonValue = JSON.stringify(value);
      AsyncStorage.setItem("@P5_2020_IWEB:quiz", jsonValue);
      Alert.alert("", "Ha sido guardado correctamente");
    } catch (error) {
      Alert.alert("", "No ha sido guardado");
    }
  }

  async remove() {
    try {
      await AsyncStorage.removeItem("@P5_2020_IWEB:quiz");
      Alert.alert("", "Ha sido borrado correctamente");
    } catch (error) {
      Alert.alert("", "No ha sido borrado");
    }
  }

  render() {
    const load = async () => {
      try {
        let value = await AsyncStorage.getItem("@P5_2020_IWEB:quiz");
        if (value !== null) {
          this.props.dispatch(initQuizzes(JSON.parse(value)));
          Alert.alert("", "Ha sido cargado correctamente");
        } else {
          Alert.alert(
            "",
            "No pudo cargarse porque no había nada guardado"
          );
        }
      } catch (error) {
        Alert.alert("", "No ha sido cargado");
      }
    };

    if (this.props.quizzes.length !== 0) {
      if (!this.props.finished) {
        return (
          <View>
            <Game
              quiz={this.props.quizzes[this.props.currentQuiz]}
              finished={this.props.finished}
              score={this.props.score}
              quizzes={this.props.quizzes}
              currentQuiz={this.props.currentQuiz}
              save={this.save}
              load={load}
              remove={this.remove}
              onQuestionAnswer={(answer) => {
                this.props.dispatch(
                  questionAnswer(this.props.currentQuiz, answer)
                );
              }}
              previous={() => {
                this.props.dispatch(changeQuiz(this.props.currentQuiz - 1));
              }}
              next={() => {
                this.props.dispatch(changeQuiz(this.props.currentQuiz + 1));
              }}
              submit={() => {
                this.props.dispatch(submit(this.props.quizzes));
              }}
              indice={(index) => {
                this.props.dispatch(changeQuiz(index));
              }}
            />
          </View>
        );
      } else {
        return (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 300,
            }}
          >
            <Text
              style={{
                marginBottom: 50,
              }}
            >
              {this.props.finished ? (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 30,
                    }}
                  >
                    TU PUNTUACIÓN ES DE:
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 30,
                    }}
                  >
                    {this.props.score}/10
                  </Text>
                </View>
              ) : null}
            </Text>
            <Button title="Jugar otra vez!" onPress={(e) => this.fetching()} />
          </View>
        );
      }
    } else {
      return <Text>No Hay preguntas disponibles, recarga la página</Text>;
    }
  }
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(GameScreen);
