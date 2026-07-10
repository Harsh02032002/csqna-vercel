import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await login(username, password);
      if (res.success) {
        navigate('/panel/dashboard');
      } else {
        setError(res.message || 'Invalid username or password.');
      }
    } catch {
      setError('Connection to security auth gateway failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid" style={{ minHeight: '80vh', paddingTop: '150px', paddingBottom: '100px', backgroundColor: '#f4f7f6' }}>
      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-8 col-12">
          <div className="card shadow-lg p-5" style={{ borderRadius: '15px', border: 'none' }}>
            <div className="text-center mb-4">
              <img src="/marketing-assets/images/logo/Favicon.png" alt="logo" style={{ width: '45px', marginBottom: '15px' }} />
              <h3 style={{ fontWeight: 'bold', color: '#1a3456' }}>CSQNA Gateway Login</h3>
              <p style={{ color: '#777', fontSize: '13px' }}>Enter your credentials to access the assessment dashboard</p>
            </div>

            {error && (
              <div className="alert alert-danger" style={{ fontSize: '13px' }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#555' }}>Username or Email</label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                  style={{ borderRadius: '8px', fontSize: '14px', padding: '10px' }}
                  placeholder="Enter email or username"
                />
              </div>

              <div className="form-group mb-4">
                <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#555' }}>Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  style={{ borderRadius: '8px', fontSize: '14px', padding: '10px' }}
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-100 rt-btn rt-gradient pill text-uppercase rt-Bshadow-1"
                style={{ padding: '10px', fontSize: '14px', fontWeight: 'bold', border: 'none' }}
              >
                {loading ? 'Authenticating...' : 'Sign In'}
              </button>
            </form>

            <div className="text-center mt-4" style={{ fontSize: '13px' }}>
              Don't have an account? <Link to="/register" style={{ color: '#007bff', fontWeight: 'bold' }}>Register now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
