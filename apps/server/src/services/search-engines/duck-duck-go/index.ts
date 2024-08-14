import { Injectable } from '@nestjs/common';
import { SearchEngine } from '~/services/search-engines/contract';
import { DuckDuckGoSearchResponse } from '~/services/search-engines/duck-duck-go/types';
import Env from '~/shared/env';

@Injectable()
export class DuckDuckGo implements SearchEngine<DuckDuckGoSearchResponse> {
  private readonly apiUrl: string;

  constructor() {
    this.apiUrl = Env.duckDuckGoApiUrl;
  }

  private async fetch(searchTerm: string): Promise<DuckDuckGoSearchResponse> {
    const response = await fetch(`${this.apiUrl}?q=${searchTerm}&format=json`);
    return response.json();
  }

  async search(query: string): Promise<DuckDuckGoSearchResponse> {
    return this.fetch(query);
  }
}
