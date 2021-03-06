export type SearchFilter = {
  readonly key: string;
  readonly value: string;
};

export type Profile = {
  readonly name: string;
  readonly age: number;
  readonly interest: string;
  readonly thumbnail: string;
  readonly enrolledInUniOrGraduated: boolean;
  readonly educationalLevels: ReadonlyArray<SearchFilter>;
  readonly educationalRoles: ReadonlyArray<SearchFilter>;
  readonly fakejwt: string;
};
