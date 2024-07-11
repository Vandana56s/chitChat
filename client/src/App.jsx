import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';

// Import individual components lazily
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Chat = lazy(() => import('./pages/Chat'));
const Groups = lazy(() => import('./pages/Groups'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard')); // Keep only one import for Dashboard
const UserManagement = lazy(() => import('./pages/admin/UserManagement')); // Keep only one import for Dashboard
const MessageManagement = lazy(() => import('./pages/admin/MessageManagement')); // Keep only one import for Dashboard
const ChatManagement = lazy(() => import('./pages/admin/ChatManagement')); // Keep only one import for Dashboard

let user = true; // Adjust based on authentication logic

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Protected routes for authenticated users */}
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Route>

          {/* Route for login page */}
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />

          {/* Route for admin login page */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users-management" element={<UserManagement />} />
          <Route path="/admin/chats-management" element={<ChatManagement />} />
          <Route path="/admin/messages-management" element={<MessageManagement />} />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
