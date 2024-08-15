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

  private static toSearchResults(
    data:
      | DuckDuckGoSearchResponse['RelatedTopics']
      | DuckDuckGoSearchResponse['Results'],
  ) {
    return data.reduce((acc, result) => {
      if (result.FirstURL && result.Text) {
        acc.push({
          url: result.FirstURL,
          title: result.Text,
        });
      }

      return acc;
    }, [] as SearchResults[]);
  }

  public static toDTO(data: DuckDuckGoSearchResponse) {
    const payload = {
      abstract: data.Abstract,
      results: this.toSearchResults(data.Results),
      relatedTopics: this.toSearchResults(data.RelatedTopics),
    };

    return new SearchDTO(payload);
  }
}

export class SearchBodyDTO {
  @IsString()
  searchTerm: string;
}
