import Link from "next/link";
import { SearchResultItem } from "~/types/search";

type DisplaySearchResultProps = {
  searchResult: SearchResultItem[];
};

const DisplaySearchResult: React.FC<DisplaySearchResultProps> = ({
  searchResult,
}) => {
  return (
    <div className="space-y-2">
      <h1 className="font-bold text-lg">Search Result</h1>
      <div className="flex flex-row space-x-4 overflow-x-auto h-full">
        <ul>
          {searchResult.map((result) => (
            <li key={result.url}>
              <Link
                href={result.url}
                target="_blank"
                className="visited:text-purple-500"
              >
                {result.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DisplaySearchResult;
