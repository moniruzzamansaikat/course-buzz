import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CoursePage from './pages/CoursePage';
import Navbar from './components/Navbar/Navbar';
import CourseProvider from './context/CourseProvider';
import SingleCoursePage from './pages/SingleCoursePage';
import VideoProvider from './context/VideoProvider';
import AuthProvider from './context/AuthProvider';
import PrivatePage from './pages/PrivatePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import AddVideo from './pages/AddVideo';
import Profile from './pages/Profile';
import Footer from './components/Footer/Footer';
import VideoDetails from './pages/VideoDetails';
import AOS from 'aos';
import { useEffect } from 'react';
import Community from './pages/Community';
import Main from './components/Community/Main';
import Ask from './components/Community/Ask';
import Replies from './pages/Replies';
import 'aos/dist/aos.css';
import './App.css';

import './utils/translations';

function App() {
  useEffect(() => {
    AOS.init({
      duration: '1000',
    });
  }, []);

  return (
    <div className="App">
      <AuthProvider>
        <CourseProvider>
          <VideoProvider>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<CoursePage />} />

              <Route path="/community" element={<Community />}>
                <Route index element={<Main />} />
                <Route path=":id" element={<Replies />} />
                <Route element={<PrivatePage />}>
                  <Route path="ask" element={<Ask />} />
                </Route>
              </Route>

              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route element={<PrivatePage />}>
                <Route path="/courses/:slug" element={<SingleCoursePage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/add-video" element={<AddVideo />} />
                <Route path={`/videos/:id`} element={<VideoDetails />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </VideoProvider>
        </CourseProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
