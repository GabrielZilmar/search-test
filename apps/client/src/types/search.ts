export interface SearchResultItem {
  url: string;
  title: string;
}

export interface SearchResponse {
  name: string;
  abstract: string;
  results: SearchResultItem[];
  relatedTopics: SearchResultItem[];
}
