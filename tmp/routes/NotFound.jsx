import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Not Found - Trivia Game";
  });

  return (
    <>
      <h1>Error</h1>
      <h2>Page Not Found</h2>
    </>
  );
}
