import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Questions from "./Questions";
import QuestionDetail from "./QuestionDetail";
import Result from "./Result";
import NotFound from "./NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />}>
            <Route path=":questionNr" element={<QuestionDetail />} />
            <Route index element={<p>No question selected</p>} />
            <Route
              path="notfound"
              element={<p>This question does not exist</p>}
            />
          </Route>
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
