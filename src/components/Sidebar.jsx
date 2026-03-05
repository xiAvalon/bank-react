import logo from "../assets/logo.png";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="profile-avatar">
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="profile-name">John Doe</div>
        <div className="profile-role">account owner</div>
      </div>

      <nav className="menu">
        <a className="menu-item" href="#">
          <span className="menu-icon">
            <i className="fa-regular fa-credit-card"></i>
          </span>
          <span>Manage Payroll Request</span>
        </a>

        <a className="menu-item active" href="#">
          <span className="menu-icon">
            <i className="fa-solid fa-user-plus"></i>
          </span>
          <span>Manage Accounts</span>
        </a>
      </nav>

      <div className="sidebar-footer">
        <div className="footer-logo">
          <div className="brand-logo">
            <img src={logo} alt="bank logo" />
          </div>

          <div className="footer-note">
            حقوق النشر 2023 بنك الاستثمار العربي
            <br />
            جميع الحقوق محفوظة
          </div>
        </div>
      </div>
    </aside>
  );
}
