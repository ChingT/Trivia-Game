import { useEffect } from "react";

export default function Result() {
  useEffect(() => {
    document.title = "Result - Trivia Game";
  });

  return (
    <main id="result">
      <h1>Result</h1>
    </main>
  );
}
