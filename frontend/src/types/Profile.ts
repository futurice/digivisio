export type SearchFilter = {
  key: string;
  value: string;
}

export type Profile = {
  readonly name: string;
  readonly age: number;
  readonly keywords: ReadonlyArray<string>;
  readonly educationalLevels: ReadonlyArray<SearchFilter>;
  readonly educationalRoles: ReadonlyArray<SearchFilter>;
  readonly fakejwt: string;
};
