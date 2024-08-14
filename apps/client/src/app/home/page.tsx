import SearchForm from "~/app/components/forms/search";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <SearchForm />
      </div>
    </main>
  );
}
