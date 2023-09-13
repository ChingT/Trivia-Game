import { useEffect } from "react";

export default function Result() {
  useEffect(() => {
    document.title = "Result - Trivia Game";
  });

  return (
    <>
      <h1>Result</h1>
    </>
  );
}
