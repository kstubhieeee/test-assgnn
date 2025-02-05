import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/signin');
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </header>
      <main className="dashboard-content">
        <p>Hello Sir !</p>
      </main>
    </div>
  );
}

export default Dashboard;