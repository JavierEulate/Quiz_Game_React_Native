import { Provider } from "react-redux";
import GlobalState from "./reducers";
import { createStore } from "redux";
import React from "react";
import { quizzes } from "../../assets/mock-data";
import GameScreen from "../components/GameScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default class ReduxProvider extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      score: 0,
      finished: false,
      currentQuiz: 0,
      quizzes: [...quizzes],
    };
    this.store = this.configureStore();
  }
  render() {
    return (
      <Provider store={this.store}>
        <SafeAreaView>
          <GameScreen/>
        </SafeAreaView>
      </Provider>
    );
  }
  configureStore() {
    return createStore(GlobalState, this.initialState);
  }
}
