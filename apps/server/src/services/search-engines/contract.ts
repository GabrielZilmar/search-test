export interface SearchEngine<T> {
  search: (query: string) => Promise<T>;
}
