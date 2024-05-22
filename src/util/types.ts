/**
 * Flatten a nested object and convert keys to dot path notation.
 */
export type DotPaths<T extends object, S extends string = ''> =
  | {
      [x in keyof T & string as T[x] extends object ? never : `${S}${x}`]: T[x];
    }
  | ({
      [x in keyof T & string as T[x] extends object ? x : never]: DotPaths<
        T[x] & object,
        `${S}${x}.`
      >;
    } extends infer I
      ? I[keyof I]
      : never);
