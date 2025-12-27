import { NavLink } from "react-router-dom";
import {
  FaRegUser,
  FaBoxOpen,
  FaRegCalendarAlt,
  FaRegStar,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../../auth/context/AuthContext";
import "./style.css";

export function ProfileSidebar() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <div className="profile-sidebar d-flex flex-column">
      <div className="sidebar-header text-center">
        <img 
          src={user?.image || '/src/assets/img/default-avatar.jpg'} 
          alt={user?.name || 'User'} 
          className="profile-avatar" 
        />
        <h6 className="profile-name mt-3">{user?.name || 'User'}</h6>
      </div>

      <hr className="sidebar-divider" />
      <div className="sidebar-menu flex-grow-1">
        <NavLink to="/profile/manage" className="sidebar-item">
          <FaRegUser className="me-3" /> Manage Profile
        </NavLink>

        <NavLink to="/profile/orders" className="sidebar-item">
          <FaBoxOpen className="me-3" /> My Order
        </NavLink>

        <NavLink to="/profile/bookings" className="sidebar-item">
          <FaRegCalendarAlt className="me-3" /> My bookings
        </NavLink>

        <NavLink to="/profile/reviews" className="sidebar-item">
          <FaRegStar className="me-3" /> My Reviews
        </NavLink>
      </div>

      <hr className="sidebar-divider" />

      <div className="mt-auto pt-4">
        <button 
          onClick={handleLogout}
          className="w-100 btn btn-danger py-2 fw-bold sign-out-btn"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
