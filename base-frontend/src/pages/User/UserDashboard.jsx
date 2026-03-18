import { Link } from 'react-router-dom';

export default function UserDashboard() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Inter, sans-serif' }}>
      <h1>Welcome to your Dashboard</h1>
      <p>Your account has been successfully created. Here you will be able to manage your profile and view matches.</p>
      <Link to="/" style={{ color: '#FF2D6B', textDecoration: 'none', fontWeight: 'bold' }}>&larr; Back to Home</Link>
    </div>
  );
}
