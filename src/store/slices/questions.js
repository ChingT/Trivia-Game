import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
};

const QuestionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    loadQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export const { loadQuestions } = QuestionSlice.actions;
export default QuestionSlice.reducer;
