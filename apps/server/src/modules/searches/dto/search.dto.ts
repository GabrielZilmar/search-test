import { Type } from 'class-transformer';
import { IsArray, IsString, IsUrl, ValidateNested } from 'class-validator';
import { DuckDuckGoSearchResponse } from '~/services/search-engines/duck-duck-go/types';
import { IsNullable } from '~/shared/class-validators/is-nullable';

class SearchResults {
  @IsUrl()
  url: string;

  @IsString()
  title: string;

  constructor(data: SearchResults) {
    this.url = data.url;
    this.title = data.title;
  }
}

export class SearchDTO {
  @IsString()
  @IsNullable()
  abstract: string | null;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SearchResults)
  results: SearchResults[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SearchResults)
  relatedTopics: SearchResults[];

  constructor(data: SearchDTO) {
    this.abstract = data.abstract;
    this.results = data.results;
    this.relatedTopics = data.relatedTopics;
  }

  public static toDTO(data: DuckDuckGoSearchResponse) {
    const payload = {
      abstract: data.Abstract,
      results: data.Results.map((result) => ({
        url: result.FirstURL,
        title: result.Text,
      })),
      relatedTopics: data.RelatedTopics.map((topic) => ({
        url: topic.FirstURL,
        title: topic.Text,
      })),
    };

    return new SearchDTO(payload);
  }
}

export class SearchQueriesDTO {
  @IsString()
  searchTerm: string;
}
