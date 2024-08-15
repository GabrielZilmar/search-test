import { Card, CardContent, CardHeader, CardTitle } from "@cialdnb/ui";
import Link from "next/link";
import { SearchResultItem } from "~/types/search";

type DisplayRelatedTopicsProps = {
  relatedTopics: SearchResultItem[];
};

const DisplayRelatedTopics: React.FC<DisplayRelatedTopicsProps> = ({
  relatedTopics,
}) => {
  return (
    <div className="space-y-2">
      <h1 className="font-bold text-lg">Related Topics</h1>
      <div className="grid grid-cols-4 gap-4">
        {relatedTopics.map((topic) => (
          <Card key={topic.url} className="flex-1">
            <Link href={topic.url} target="_blank">
              <CardHeader>
                <CardTitle>{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{topic.title}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DisplayRelatedTopics;
