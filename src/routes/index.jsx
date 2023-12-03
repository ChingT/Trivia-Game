import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import NotFound from "./NotFound";
import QuestionDetail from "./QuestionDetail";
import Result from "./Result";

export default function Router() {
  return (
    <BrowserRouter basename="/Trivia-Game">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/questions/:questionNr" element={<QuestionDetail />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
