import { Injectable } from '@nestjs/common';
import path from 'path';
import fs from 'fs';
import { SearchDTO } from '~/modules/searches/dto/search.dto';
import { DB } from '~/services/db/contract';

@Injectable()
export class HashDB implements DB<SearchDTO> {
  private readonly filePath: string;

  constructor() {
    const filePath = path.join(__dirname, 'data.json');
    this.filePath = filePath;
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify({}, null, 2), 'utf8');
    }
  }

  private get store(): Record<string, SearchDTO> {
    return JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
  }

  find(id: string): SearchDTO | null {
    return this.store[id] || null;
  }

  insert(id: string, value: SearchDTO): boolean {
    const store = this.store;
    store[id] = value;
    fs.writeFileSync(this.filePath, JSON.stringify(store, null, 2), 'utf8');
    return true;
  }

  list(): SearchDTO[] {
    return Object.values(this.store);
  }

  clear(): void {
    fs.writeFileSync(this.filePath, JSON.stringify({}, null, 2), 'utf8');
  }
}
