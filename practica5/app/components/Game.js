import React from "react";
import MyImage from "./MyImage";
import Author from "./Author";
import Question from "./Question";
import IndexButton from "./IndexButton";
import noimg from "../../assets/noimg.jpg";
import stickman from "../../assets/stickman.jpg";
import { View, Text, TextInput, Button, Image } from "react-native";

export default class Game extends React.Component {
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            marginTop: 30,
            marginRight: 30,
          }}
        >
          <IndexButton
            quizzes={this.props.quizzes}
            indice={this.props.indice}
            currentQuiz={this.props.currentQuiz}
          />
        </View>

        <View>
          <Question question={this.props.quiz.question} />

          <View>
            <View>
              {this.props.quiz.attachment === null ? (
                <MyImage url={noimg} />
              ) : (
                <MyImage url={this.props.quiz.attachment.url} />
              )}
            </View>
            <View>
              <TextInput
                class="form-control"
                type="text"
                id="intro"
                style={{
                  margin: 20,
                  backgroundColor: "white",
                  borderRadius: 10,
                  padding: 10,
                }}
                placeholder="Escribe tu respuesta"
                value={this.props.quiz.userAnswer || ""}
                onChangeText={(e) => this.props.onQuestionAnswer(e)}
              />
            </View>
          </View>
          <View>
            <View>
              {this.props.currentQuiz === 0 ? (
                <Button
                  title="Anterior"
                  onPress={(e) => this.props.previous()}
                  disabled
                />
              ) : (
                <Button
                  title="Anterior"
                  onPress={(e) => this.props.previous()}
                />
              )}

              {this.props.currentQuiz === 9 ? (
                <Button
                  title="Siguiente"
                  onPress={(e) => this.props.next()}
                  disabled
                />
              ) : (
                <Button title="Siguiente" onPress={(e) => this.props.next()} />
              )}

              {this.props.currentQuiz !== 9 ? (
                <Button title="Submit" disabled />
              ) : (
                <Button title="Submit" onPress={(e) => this.props.submit()} />
              )}
            </View>

            <Button
              title="Save"
              onPress={(e) => this.props.save(this.props.quizzes)}
            />
            <Button title="Load" onPress={(e) => this.props.load()} />
            <Button title="Remove" onPress={(e) => this.props.remove()} />
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                marginTop: 10,
              }}
            >
              Quiz creado por:
            </Text>
            {this.props.quiz.author === null ? (
              <View id="author">
                <Image
                  class="rounded-circle"
                  source={stickman}
                  style={{ width: 50, height: 50 }}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    marginTop: 10,
                  }}
                >
                  Anónimo
                </Text>
              </View>
            ) : (
              <Author author={this.props.quiz.author} />
            )}
          </View>
        </View>
      </View>
    );
  }
}
