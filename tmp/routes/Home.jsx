import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Trivia Game";
  });

  return (
    <>
      <h1>Home</h1>
      <p>Welcome!</p>
    </>
  );
}
