import { useEffect } from "react";

export default function Questions() {
  useEffect(() => {
    document.title = "Questions - Trivia Game";
  });

  return (
    <>
      <h1>Questions</h1>
    </>
  );
}
