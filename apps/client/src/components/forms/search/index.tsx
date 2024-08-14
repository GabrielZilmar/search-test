"use client";

import { Button, Input } from "@cialdnb/ui";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { ALL_ROUTES } from "~/constants/routes";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set("q", searchTerm);
    router.push(`${ALL_ROUTES.search}?${params.toString()}`);
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
