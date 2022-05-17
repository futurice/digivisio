export type Description = {
  readonly description: string;
  readonly language: string;
};

export type MaterialName = {
  readonly materialname: string;
  readonly language: string;
};

export type TranslatedMaterial = {
  readonly [key: string]: string;
  readonly language: string;
};

export type SearchResult = {
  readonly id: string;
  readonly description: readonly Description[];
  readonly materialName: readonly MaterialName[];
};

export type SearchResults = readonly SearchResult[];

export type SearchResultsResponse = {
  readonly hits: number;
  readonly results: SearchResults;
};
