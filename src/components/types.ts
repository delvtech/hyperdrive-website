/**
 * Construct a type in which only a single key of `T` can be defined at a time.
 */
export type OneOf<T> = {
  [K in keyof T]: {
    [Key in K]: T[K];
  } & {
    [OtherKeys in Exclude<keyof T, K>]?: undefined;
  };
}[keyof T];
