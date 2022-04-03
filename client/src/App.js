import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/login';
import AdminPage from './pages/admin';
import HomePage from './pages/home';
import PostIdea from './pages/home/postIdea';
import IdeaDetail from './pages/home/ideaDetail';
import LandingPage from './pages/landing';
import QAmanager from './pages/QAmanager';
import ManagerTopic from './pages/QAmanager/managerTopic';
import DownloadFile from './pages/QAmanager/downloadFIle';
import DownloadDetail from './pages/QAmanager/downloadFIle/downloadDetail';
import DashBoard from './pages/QAmanager/dashboard';
import AuthContextProvider from "./contexts/AuthContext";
import UserContextProvider from "./contexts/UserContext";
import TopicContextProvider from "./contexts/TopicContext";
import ProtectedRouteAdmin from './routing/ProtectedRouteAdmin';
import ProtectedRouteHome from './routing/ProtectedRouteHome';
import ProtectedRouteQAManager from './routing/ProtectedRouteQA_Manager';
import './App.css';

function App() {
  return (
    <AuthContextProvider>
      <TopicContextProvider>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/admin" element={<ProtectedRouteAdmin redirectTo='/login'>
              <AdminPage />
            </ProtectedRouteAdmin>} />
            <Route path="/admin/create" element={<AdminPage task='create' />} />
            <Route path="/admin/viewAll" element={<AdminPage task='viewAll' />} />
            <Route path="/admin/deadline" element={<AdminPage task='deadline' />} />

            <Route path="/qa-manager" element={<ProtectedRouteQAManager redirectTo='/login'>
              <QAmanager />
            </ProtectedRouteQAManager>} />
            <Route path="/manager-topic" element={<ManagerTopic />} />
            <Route path="/download-file" element={<DownloadFile />} />
            <Route path="/download-detail" element={<DownloadDetail />} />
            <Route path="/dashboard" element={<DashBoard />} />

            <Route path="/home" element={<ProtectedRouteHome redirectTo='/login'>
              <HomePage />
            </ProtectedRouteHome>} />
            <Route path="/postIdea" element={<PostIdea />} />
            <Route path="/ideaDetail" element={<IdeaDetail />} />

          </Routes>
        </UserContextProvider>
      </TopicContextProvider>
    </AuthContextProvider>
  );
}

export default App;
