export interface SearchResultItem {
  url: string;
  title: string;
}

export interface SearchResponse {
  abstract: string;
  results: SearchResultItem[];
  relatedTopics: SearchResultItem[];
}
