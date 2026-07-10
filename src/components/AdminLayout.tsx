import React, { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const AdminLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    logout();
    navigate('/');
  };

  return (
    <div className={`wrapper ${sidebarCollapsed ? 'sidebar_minimize' : ''}`} style={{ background: '#f4f7f6', minHeight: '100vh' }}>
      {/* Top Main Header */}
      <div className="main-header" style={{ background: '#343a40' }}>
        {/* Logo Header */}
        <div className="logo-header" style={{ background: '#343a40' }}>
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
        <nav className="navbar navbar-header navbar-expand-lg" style={{ background: '#343a40' }}>
          <div className="container-fluid">
            <div className="navbar-minimize">
              <button className="btn btn-minimize btn-rounded" onClick={() => setSidebarCollapsed(!sidebarCollapsed)} style={{ background: 'transparent', border: 'none' }}>
                <img src="/assets/images/dashboard/bar.png" width="16" alt="collapse" />
              </button>
            </div>

            <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
              <li className="nav-item mr-3">
                <span className="badge badge-danger text-uppercase" style={{ fontSize: '11px', padding: '6px 12px' }}>Admin Portal</span>
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
              <Link to="/admin/dashboard" className={`d-flex w-100 justify-content-start align-items-center py-2 px-4 ${location.pathname === '/admin/dashboard' ? 'active' : ''}`} style={{ textDecoration: 'none', color: '#333' }}>
                <img src="/assets/images/svg/dashboard.svg" width="20" className="mr-3" />
                <span className="menu-collapsed" style={{ fontSize: '14px', fontWeight: '500' }}>Admin Dashboard</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/admin/users" className={`d-flex w-100 justify-content-start align-items-center py-2 px-4 ${location.pathname === '/admin/users' ? 'active' : ''}`} style={{ textDecoration: 'none', color: '#333' }}>
                <img src="/assets/images/svg/profile.svg" width="20" className="mr-3" />
                <span className="menu-collapsed" style={{ fontSize: '14px', fontWeight: '500' }}>Clients Database</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/admin/upload" className={`d-flex w-100 justify-content-start align-items-center py-2 px-4 ${location.pathname === '/admin/upload' ? 'active' : ''}`} style={{ textDecoration: 'none', color: '#333' }}>
                <img src="/assets/images/svg/paper.svg" width="20" className="mr-3" />
                <span className="menu-collapsed" style={{ fontSize: '14px', fontWeight: '500' }}>Upload Database</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content Render area */}
      <div className="main-panel" style={{ paddingLeft: sidebarCollapsed ? '0' : '260px', paddingTop: '80px', transition: 'all 0.3s' }}>
        <div className="content" style={{ padding: '30px' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
