import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../utils/api';

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [countries, setCountries] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await api.get('/auth/getcountries');
        if (res.data && res.data.status) {
          setCountries(res.data.data);
        }
      } catch {
        // Fallback
      }
    };
    fetchCountries();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      const res = await api.post('/auth/register', {
        fullname: name,
        email,
        username,
        password,
        country: selectedCountry,
      });
      if (res.data && res.data.status) {
        setSuccess('Registration successful! Please check your email to verify your account.');
        setTimeout(() => navigate('/login'), 5000);
      } else {
        setError(res.data?.message || 'Registration failed.');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration request failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid" style={{ minHeight: '80vh', paddingTop: '150px', paddingBottom: '100px', backgroundColor: '#f4f7f6' }}>
      <div className="row justify-content-center">
        <div className="col-md-5 col-sm-8 col-12">
          <div className="card shadow-lg p-5" style={{ borderRadius: '15px', border: 'none' }}>
            <div className="text-center mb-4">
              <img src="/marketing-assets/images/logo/Favicon.png" alt="logo" style={{ width: '45px', marginBottom: '15px' }} />
              <h3 style={{ fontWeight: 'bold', color: '#1a3456' }}>CSQNA Candidate Registration</h3>
              <p style={{ color: '#777', fontSize: '13px' }}>Create an account to begin cybersecurity assessments</p>
            </div>

            {error && (
              <div className="alert alert-danger" style={{ fontSize: '13px' }}>
                {error}
              </div>
            )}

            {success && (
              <div className="alert alert-success" style={{ fontSize: '13px' }}>
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#555' }}>Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  style={{ borderRadius: '8px', fontSize: '14px', padding: '8px' }}
                  placeholder="e.g. John Doe"
                />
              </div>

              <div className="form-group mb-3">
                <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#555' }}>Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  style={{ borderRadius: '8px', fontSize: '14px', padding: '8px' }}
                  placeholder="e.g. john@example.com"
                />
              </div>

              <div className="form-group mb-3">
                <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#555' }}>Username</label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                  style={{ borderRadius: '8px', fontSize: '14px', padding: '8px' }}
                  placeholder="e.g. john_doe"
                />
              </div>

              <div className="form-group mb-3">
                <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#555' }}>Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  style={{ borderRadius: '8px', fontSize: '14px', padding: '8px' }}
                  placeholder="••••••••"
                />
              </div>

              <div className="form-group mb-4">
                <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#555' }}>Country</label>
                <select
                  required
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="form-control"
                  style={{ borderRadius: '8px', fontSize: '14px', height: '40px' }}
                >
                  <option value="">Select country...</option>
                  {countries.map((c) => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-100 rt-btn rt-gradient pill text-uppercase rt-Bshadow-1"
                style={{ padding: '10px', fontSize: '14px', fontWeight: 'bold', border: 'none' }}
              >
                {loading ? 'Processing...' : 'Register'}
              </button>
            </form>

            <div className="text-center mt-4" style={{ fontSize: '13px' }}>
              Already have an account? <Link to="/login" style={{ color: '#007bff', fontWeight: 'bold' }}>Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
