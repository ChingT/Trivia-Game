import { useEffect } from "react";

export default function QuestionDetail() {
  useEffect(() => {
    document.title = "Question - Trivia Game";
  });

  return (
    <>
      <h1>Question</h1>
    </>
  );
}
