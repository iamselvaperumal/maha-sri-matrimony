import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout';
import AdminDashboardPage from './pages/AdminDashboardPage';
import DashboardPage from './pages/DashboardPage';
import InterestManagementPage from './pages/InterestManagementPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import MessagingPage from './pages/MessagingPage';
import ProfileCreationPage from './pages/ProfileCreationPage';
import ProfileViewPage from './pages/ProfileViewPage';
import RegisterPage from './pages/RegisterPage';
import SearchMatchesPage from './pages/SearchMatchesPage';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Maha Sri Devangar Matrimony | Premium Matchmaking Platform</title>
        <meta name="description" content="Find your perfect match in the Devangar Community. 100% Verified Profiles, highest success rates." />
      </Helmet>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/search" element={<SearchMatchesPage />} />
            <Route path="/profile-create" element={<ProfileCreationPage />} />
            <Route path="/profile/:id" element={<ProfileViewPage />} />
            <Route path="/interests" element={<InterestManagementPage />} />
            <Route path="/messages" element={<MessagingPage />} />
            <Route path="/admin" element={<AdminDashboardPage />} />
          </Routes>
        </BaseLayout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
