"use client";

import { Button, Input } from "@cialdnb/ui";
import { ChangeEvent, FormEvent, useState } from "react";

export default function SearchForm() {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.info({ search });
  };

  return (
    <div>
      <form className="flex space-x-2" onSubmit={handleSubmit}>
        <Input type="text" placeholder="Search..." onChange={handleSearch} />
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
}
