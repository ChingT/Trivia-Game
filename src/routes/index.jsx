import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import QuestionDetail from "./QuestionDetail";
import Result from "./Result";
import NotFound from "./NotFound";

export default function Router() {
  return (
    <BrowserRouter>
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
