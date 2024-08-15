import SearchForm from "~/components/forms/search";
import SearchHistory from "~/components/search-history";

export default function Home() {
  return (
    <main>
      <div className="absolute p-4">
        <SearchHistory />
      </div>
      <div className="flex justify-center items-center h-screen">
        <SearchForm />
      </div>
    </main>
  );
}
