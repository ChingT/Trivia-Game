import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: {},
  options: {},
  answers: {},
};

const QuestionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    loadQuestions: (state, action) => {
      const questionsArray = action.payload;
      state.questions = Object.fromEntries(
        questionsArray.map((question, index) => [index + 1, question])
      );
    },
    setOptions: (state, action) => {
      const [questionNr, options] = action.payload;
      state.options[questionNr] = options;
    },
    saveAnswer: (state, action) => {
      const [questionNr, answer] = action.payload;
      state.answers[questionNr] = answer;
    },
  },
});

export const { loadQuestions, saveAnswer, setOptions } = QuestionSlice.actions;
export default QuestionSlice.reducer;
