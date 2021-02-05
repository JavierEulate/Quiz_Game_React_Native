import { combineReducers } from 'redux';
import { QUESTION_ANSWER, CHANGE_QUIZ, SUBMIT, INIT_QUIZZES } from './actions'

function score(state = 0, action = {}) {
	switch(action.type) {
		case SUBMIT:
			let answer;
			let contador=0;
             action.payload.quizzes.map((quiz) => {
                 if (action.payload.quizzes[action.payload.quizzes.indexOf(quiz)].userAnswer === undefined)
                     answer = "";
                 else{ answer = action.payload.quizzes[action.payload.quizzes.indexOf(quiz)].userAnswer}
                 if (quiz.answer.trim().toLowerCase() === answer.trim().toLowerCase())
                     contador++;
			 });
			return contador;

		default:
			return state;
	}
}

function finished(state = false, action = {}) {
	switch(action.type) {
		case SUBMIT:
			return state=true;

		case INIT_QUIZZES:
			return state = false;

		default:
			return state;
	}
}

function currentQuiz(state = 0, action = {}) {
	switch(action.type) {
		case CHANGE_QUIZ:
			return state = action.payload.index;
		case INIT_QUIZZES:
			return state = 0;
		default:
			return state;
	}
}

function quizzes(state = [], action = {}) {
	switch(action.type) {
		case QUESTION_ANSWER:
			return state.map((quiz,i) => {
				return { ...quiz,
					userAnswer: action.payload.index === i ? action.payload.answer : quiz.userAnswer}
			})
		case INIT_QUIZZES:
			return state = action.payload.quizzes;

		default:
			return state;
	}
}

const GlobalState = (combineReducers({
	score,
	finished,
	currentQuiz,
	quizzes
}));

export default GlobalState;
