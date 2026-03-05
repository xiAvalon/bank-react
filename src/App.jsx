import Sidebar from "./components/Sidebar";
import PageHeader from "./components/PageHeader";
import AccountsCard from "./components/AccountsCard";
import TopBar from "./components/Topbar";
import { useState } from "react";
import { accounts } from "./data/accounts";

export default function App() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState({ key: "id", direction: "asc" });

  const filteredAccounts = accounts.filter((acc) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      acc.id.toLowerCase().includes(q) ||
      acc.name.toLowerCase().includes(q) ||
      acc.email.toLowerCase().includes(q) ||
      acc.type.toLowerCase().includes(q) ||
      acc.status.toLowerCase().includes(q)
    );
  }).slice() 
  .sort((a, b) => {
    const { key, direction } = sort;

    const aValue = String(a[key] ?? "").toLowerCase();
    const bValue = String(b[key] ?? "").toLowerCase();

    if (key === "id") {
      const aNum = Number(a.id);
      const bNum = Number(b.id);
      if (!Number.isNaN(aNum) && !Number.isNaN(bNum)) {
        return direction === "asc" ? aNum - bNum : bNum - aNum;
      }
    }

    const cmp = aValue.localeCompare(bValue, undefined, { numeric: true, sensitivity: "base" });
    return direction === "asc" ? cmp : -cmp;
  });

  return (
    <>
      <TopBar />

      <div className="app">
        <Sidebar />

        <main className="main">
          <PageHeader />

          <AccountsCard 
            accounts={filteredAccounts}
            query={query}
            onQueryChange={setQuery} 
            sort={sort}
            onSortChange={setSort}
          />
        </main>
      </div>
    </>
  );
}
