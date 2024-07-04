import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Chat = lazy(() => import('./pages/Chat'));
const Groups = lazy(() => import('./pages/Groups'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
