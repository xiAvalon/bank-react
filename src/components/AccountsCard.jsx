import { useEffect, useRef, useState } from "react";

export default function AccountsCard({ accounts, query, onQueryChange, sort, onSortChange }) {
  const [showSearch, setShowSearch] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (showSearch) inputRef.current?.focus();
  }, [showSearch]);


  function downloadCSV() {
    const csvContent = "data:text/csv;charset=utf-8," + 
      ["Account ID,Account Name,Email,Account Type,Status", 
        ...accounts.map(acc => 
          `${acc.id},${acc.name},${acc.email},${acc.type},${acc.status}`)]
          .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "accounts.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section className="card">
      <div className="card-actions">
        {showSearch && (
          <div>
            <input 
              ref={inputRef}
              placeholder="Search accounts..."
              className="search-input"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
            />
            {query && (
              <button 
                className="clear-btn"
                aria-label="Clear search"
                onClick={() => onQueryChange("")}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
        )}

        {showSort && (
        <div>
          <label className="sort-label">
            Sort By:
            <select 
              className="sort-select"
              value={sort.key} 
              onChange={(e) => onSortChange((s) => ({ ...s, key: e.target.value }))}
            >
              <option value="id">Account ID</option>
              <option value="name">Account Name</option>
              <option value="email">Email</option>
              <option value="type">Account Type</option>
              <option value="status">Status</option>
            </select>

            <button 
              className="sort-dir-btn" 
              aria-label="Toggle sort direction"
              onClick={() => onSortChange((s) => ({ ...s, direction: s.direction === "asc" ? "desc" : "asc" }))}
            >
              {sort.direction === "asc" ? (
                <i className="fa-solid fa-arrow-down-wide-short"></i>
              ) : (
                <i className="fa-solid fa-arrow-up-wide-short"></i>
              )}
            </button>
          </label>
        </div>
      )}
        <button className="card-icon-btn" aria-label="Filter" onClick={() => setShowSort((s) => !s)}>
          <i className="fa-solid fa-sliders"></i>
        </button>

        <button 
          className="card-icon-btn" 
          aria-label="Print"
          onClick={() => window.print()}
        >
          <i className="fa-solid fa-print"></i>
        </button>

        <button className="card-icon-btn" aria-label="Download" onClick={downloadCSV}>
          <i className="fa-solid fa-download"></i>
        </button>

        <button 
          className="card-icon-btn" 
          aria-label="Search" 
          onClick={() => setShowSearch((s) => !s)}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Account ID</th>
              <th>Account Name</th>
              <th>Email</th>
              <th>Account Type</th>
              <th className="right">Status</th>
            </tr>
          </thead>

          <tbody>
            {accounts.map((acc, idx) => (
              <tr key={`${acc.id}-${idx}`}>
                <td>{acc.id}</td>
                <td>{acc.name}</td>
                <td>
                  <a href="#">{acc.email}</a>
                </td>
                <td>{acc.type}</td>
                <td className="account-status">{acc.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="page-arrow" aria-label="Previous">
          {"<"}
        </button>
        <button className="page-num active">1</button>
        <button className="page-num">2</button>
        <button className="page-num">3</button>
        <button className="page-arrow" aria-label="Next">
          {">"}
        </button>
      </div>
    </section>
  );
}
