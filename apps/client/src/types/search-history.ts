interface Item {
  title: string;
}

export interface SearchHistoryResponse {
  items: Item[];
  pages: number;
}
