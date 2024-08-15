import SearchForm from "~/components/forms/search";
import SearchHistory from "~/components/search-history";
import Sidebar from "~/components/sidebar";

export default function Home() {
  return (
    <main>
      <Sidebar />
      <div className="flex justify-center items-center h-screen">
        <SearchForm />
      </div>
    </main>
  );
}
