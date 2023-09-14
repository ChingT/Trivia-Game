import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Not Found - Trivia Game";
  });

  return (
    <main id="not-found">
      <h1>Page Not Found</h1>
    </main>
  );
}
