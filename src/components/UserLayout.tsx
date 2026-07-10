import React, { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const UserLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showSupportDropdown, setShowSupportDropdown] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    logout();
    navigate('/');
  };

  return (
    <div className={`wrapper ${sidebarCollapsed ? 'sidebar_minimize' : ''}`} style={{ background: '#f4f7f6', minHeight: '100vh' }}>
      {/* Top Main Header */}
      <div className="main-header" style={{ background: '#1a3456' }}>
        {/* Logo Header */}
        <div className="logo-header" style={{ background: '#1a3456' }}>
          <Link to="/" className="big-logo">
            <img src="/assets/images/logo/FamousDotsLogo.png" alt="CSQNA" className="logo-full" style={{ maxWidth: '170px' }} />
          </Link>
          <button className="navbar-toggler sidenav-toggler ml-auto" type="button" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
            <span className="navbar-toggler-icon">
              <i className="fa fa-bars" style={{ color: '#fff' }}></i>
            </span>
          </button>
        </div>

        {/* Navbar Header */}
        <nav className="navbar navbar-header navbar-expand-lg" style={{ background: '#1a3456' }}>
          <div className="container-fluid">
            <div className="navbar-minimize">
              <button className="btn btn-minimize btn-rounded" onClick={() => setSidebarCollapsed(!sidebarCollapsed)} style={{ background: 'transparent', border: 'none' }}>
                <img src="/assets/images/dashboard/bar.png" width="16" alt="collapse" />
              </button>
            </div>

            <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
              {/* Support Dropdown */}
              <li className={`nav-item dropdown hidden-caret rt-pr-10 ${showSupportDropdown ? 'show' : ''}`} style={{ position: 'relative' }}>
                <a className="dropdown-toggle" style={{ cursor: 'pointer' }} onClick={() => setShowSupportDropdown(!showSupportDropdown)}>
                  <img src="/assets/images/dashboard/support_1.png" width="20" alt="support" className="img-circle" />
                </a>
                {showSupportDropdown && (
                  <ul className="dropdown-menu dropdown-user animated fadeIn show" style={{ position: 'absolute', right: 0, top: '40px', background: '#fff', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', minWidth: '220px' }}>
                    <li>
                      <p className="dropdown-item mb-0" style={{ fontSize: '13px', color: '#333' }}>Contact: +91 9137273947</p>
                      <div className="dropdown-divider"></div>
                      <p className="dropdown-item mb-0" style={{ fontSize: '13px', color: '#333' }}>Email: support@csqna.com</p>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="https://forms.gle/meNSC4ZkWWPPK6hC6" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', color: '#007bff' }}>Contribute</a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Profile Dropdown */}
              <li className={`nav-item dropdown hidden-caret ${showProfileDropdown ? 'show' : ''}`} style={{ position: 'relative' }}>
                <a className="dropdown-toggle profile-pic" style={{ cursor: 'pointer' }} onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
                  <img src="/assets/images/dashboard/profile.png" width="36" alt="profile" className="img-circle" style={{ borderRadius: '50%' }} />
                </a>
                {showProfileDropdown && (
                  <ul className="dropdown-menu dropdown-user animated fadeIn show" style={{ position: 'absolute', right: 0, top: '45px', background: '#fff', border: '1px solid #ccc', borderRadius: '5px', padding: '15px', minWidth: '240px' }}>
                    <li>
                      <div className="user-box d-flex align-items-center gap-3">
                        <div className="u-img">
                          <img src="/assets/images/dashboard/profile.png" alt="profile" width="45" style={{ borderRadius: '50%' }} />
                        </div>
                        <div className="u-text">
                          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>{user?.name}</h4>
                          <p className="text-muted" style={{ margin: 0, fontSize: '12px' }}>{user?.email}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="/panel/settings" onClick={() => setShowProfileDropdown(false)} style={{ fontSize: '13px' }}>
                        <i className="fa fa-cog mr-2"></i>Settings
                      </Link>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#" onClick={handleLogout} style={{ fontSize: '13px', color: '#c00' }}>
                        <i className="fa fa-sign-out-alt mr-2"></i>Logout
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Side Navigation Menu */}
      <div id="sidebar-container" className="sidebar" style={{ background: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.05)' }}>
        <div className="sidebar-menu">
          <ul className="list-group" style={{ padding: '20px 0' }}>
            <li className="mb-2">
              <Link to="/panel/dashboard" className={`d-flex w-100 justify-content-start align-items-center py-2 px-4 ${location.pathname === '/panel/dashboard' ? 'active' : ''}`} style={{ textDecoration: 'none', color: '#333' }}>
                <img src="/assets/images/svg/dashboard.svg" width="20" className="mr-3" />
                <span className="menu-collapsed" style={{ fontSize: '14px', fontWeight: '500' }}>Dashboard</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/panel/create" className={`d-flex w-100 justify-content-start align-items-center py-2 px-4 ${location.pathname === '/panel/create' ? 'active' : ''}`} style={{ textDecoration: 'none', color: '#333' }}>
                <img src="/assets/images/svg/practice2.svg" width="20" className="mr-3" />
                <span className="menu-collapsed" style={{ fontSize: '14px', fontWeight: '500' }}>Create Test</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/panel/reports" className={`d-flex w-100 justify-content-start align-items-center py-2 px-4 ${location.pathname === '/panel/reports' ? 'active' : ''}`} style={{ textDecoration: 'none', color: '#333' }}>
                <img src="/assets/images/svg/reports-n-scores.svg" width="20" className="mr-3" />
                <span className="menu-collapsed" style={{ fontSize: '14px', fontWeight: '500' }}>Reports & Scores</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/panel/settings" className={`d-flex w-100 justify-content-start align-items-center py-2 px-4 ${location.pathname === '/panel/settings' ? 'active' : ''}`} style={{ textDecoration: 'none', color: '#333' }}>
                <img src="/assets/images/svg/settings.svg" width="20" className="mr-3" />
                <span className="menu-collapsed" style={{ fontSize: '14px', fontWeight: '500' }}>Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content Render area */}
      <div className="main-panel" style={{ paddingLeft: sidebarCollapsed ? '0' : '260px', pt: '80px', transition: 'all 0.3s' }}>
        <div className="content" style={{ padding: '30px' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
