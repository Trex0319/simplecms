import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import ManagePosts from "./pages/manage-posts";
import ManagePostsAdd from "./pages/manage-posts-add";
import ManagePostsEdit from "./pages/manage-posts-edit";
import Posts from "./pages/post";
import ManageUsers from "./pages/manage-users";
import ManageUsersEdit from "./pages/manage-users-edit";
import ManageUsersAdd from "./pages/manage-users-add";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-posts" element={<ManagePosts />} />
        <Route path="/manage-posts-add" element={<ManagePostsAdd />} />
        <Route path="/manage-posts-edit/:id" element={<ManagePostsEdit />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/manage-users-edit/:id" element={<ManageUsersEdit />} />
        <Route path="/manage-users-add" element={<ManageUsersAdd />} />
        <Route path="/post/:id" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
