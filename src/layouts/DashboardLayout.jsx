import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Header from "../components/header";
import "../styles/layout.css";

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <div className="main">
        <Topbar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}