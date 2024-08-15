export interface DB<T> {
  clear(): void;
  insert(id: string, value: T): boolean;
  find(id: string): T | null;
  list(page: number): { items: T[]; pages: number };
}
