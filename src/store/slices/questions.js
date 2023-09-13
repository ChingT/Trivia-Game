import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: {},
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
  },
});

export const { loadQuestions } = QuestionSlice.actions;
export default QuestionSlice.reducer;
