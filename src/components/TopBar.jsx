import navLogo from "../assets/nav-logo.png";

export default function TopBar() {
  return (
    <header className="top-bar">
      <div className="brand">
        <div className="brand-mark"><img src={navLogo} alt="Brand Logo" /></div>
        <div className="brand-text">
          <div className="brand-ar">بنك الاستثمار العربي</div>
          <div className="brand-en">ARAB INVESTMENT BANK</div>
        </div>
      </div>

      <div className="top-actions">
        <div className="icon-btn" aria-label="Apps">
          <i className="fa-solid fa-circle-user"></i>
        </div>
        <div className="icon-btn" aria-label="Language">
          <i className="fa-solid fa-language"></i>
        </div>
        <div className="icon-btn" aria-label="Notifications">
          <i className="fa-regular fa-bell"></i>
        </div>
        <div className="icon-btn" aria-label="Mail">
          <i className="fa-regular fa-envelope"></i>
        </div>
      </div>
    </header>
  );
}
