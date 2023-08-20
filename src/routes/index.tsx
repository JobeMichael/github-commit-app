import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommitDetail from "views/CommitDetailView/CommitDetailView";
import CommitList from "views/CommitListView/CommitListView";
import NotFoundView from "views/NotFoundView/NotFoundView";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:owner/:repo" element={<CommitList />} />
        <Route path="/:owner/:repo/:commitId" element={<CommitDetail />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
