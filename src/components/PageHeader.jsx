export default function PageHeader() {
  return (
    <section className="page-header">
      <div className="page-title">
        <div className="page-icon">
          <i className="fa-solid fa-user-plus"></i>
        </div>
        <div>
          <h1>Manage Accounts</h1>
          <p>Here you can view and manage all accounts</p>
        </div>
      </div>

      <button className="primary-btn">
        <span className="plus">＋</span>
        New Account
      </button>
    </section>
  );
}
