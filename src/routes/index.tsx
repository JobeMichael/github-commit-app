import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommitDetail from "views/CommitDetailView/CommitDetailView";
import CommitList from "views/CommitListView/CommitListView";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:owner/:repo" element={<CommitList />} />
        <Route path="/:owner/:repo/:commitId" element={<CommitDetail />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
