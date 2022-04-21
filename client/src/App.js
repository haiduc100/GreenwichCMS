import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/login';
import AdminPage from './pages/admin';
import HomePage from './pages/home';
import LandingPage from './pages/landing';
import QAmanager from './pages/QAmanager';
import QAcoordinator from './pages/QAcoordinator';
import ManagerTopic from './pages/QAmanager/managerTopic';
import DownloadFile from './pages/QAmanager/downloadFIle';
import DownloadDetail from './pages/QAmanager/downloadFIle/downloadDetail';
import DashBoard from './pages/QAmanager/dashboard';
import IdeaDetailQA from './pages/QAmanager/ideaDetail';
import ChangePasswordHome from './pages/home/changePassword'
import ChangePasswordQA from './pages/QAmanager/changePassword'
import AuthContextProvider from "./contexts/AuthContext";
import UserContextProvider from "./contexts/UserContext";
import TopicContextProvider from "./contexts/TopicContext";
import IdeaContextProvider from './contexts/IdeaContext'
import ReactionContextProvider from './contexts/ReactionContext'
import CommentContextProvider from './contexts/CommentContext'
import ProtectedRouteAdmin from './routing/ProtectedRouteAdmin';
import ProtectedRouteHome from './routing/ProtectedRouteHome';
import ProtectedRouteQAManager from './routing/ProtectedRouteQA_Manager';
import ProtectedRouteQACoordinator from './routing/ProtectedRouteQA_Coordinator';
import './App.css';

function App() {
  return (
    <AuthContextProvider>
      <TopicContextProvider>
        <UserContextProvider>
          <IdeaContextProvider>
            <CommentContextProvider>
              <ReactionContextProvider>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/login" element={<LoginPage />} />

                  <Route path="/admin" element={<ProtectedRouteAdmin redirectTo='/login'>
                    <AdminPage />
                  </ProtectedRouteAdmin>} />
                  <Route path="/admin/create" element={<AdminPage task='create' />} />
                  <Route path="/admin/viewAll" element={<AdminPage task='viewAll' />} />
                  <Route path="/admin/deadline" element={<AdminPage task='deadline' />} />
                  <Route path="/admin/setting" element={<AdminPage task='changepassword' />} />

                  <Route path="/qa-manager" element={<ProtectedRouteQAManager redirectTo='/login'>
                    <QAmanager />
                  </ProtectedRouteQAManager>} />
                  <Route path="/manager-topic" element={<ManagerTopic />} />
                  <Route path="/download-file" element={<DownloadFile />} />
                  <Route path="/download-detail" element={<DownloadDetail />} />
                  <Route path="/dashboard" element={<DashBoard />} />
                  <Route path="/ideaDetail-qa-manager" element={<IdeaDetailQA />} />
                  <Route path="/change-password-qapage" element={<ChangePasswordQA />} />

                  <Route path="/home" element={<ProtectedRouteHome redirectTo='/login'>
                    <HomePage />
                  </ProtectedRouteHome>} />
                  <Route path="/postIdea" element={<HomePage task='postIdea' />} />
                  <Route path="/ideaDetail-home" element={<HomePage task='ideaDetail' />} />
                  <Route path="/change-password-homepage" element={<ChangePasswordHome />} />

                  <Route path="/qa-coordinator" element={<ProtectedRouteQACoordinator redirectTo='/login'>
                    <QAcoordinator />
                  </ProtectedRouteQACoordinator>} />

                </Routes>
              </ReactionContextProvider>
            </CommentContextProvider>
          </IdeaContextProvider>
        </UserContextProvider>
      </TopicContextProvider>
    </AuthContextProvider>
  );
}

export default App;
