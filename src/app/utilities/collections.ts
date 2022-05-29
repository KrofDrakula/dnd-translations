/** Extracts the value part of a Map type */
export type ValueOfMap<M = Map<any, any>> = M extends Map<any, infer V>
  ? V
  : never;

/** Extracts the key part of a Map type */
export type KeyOfMap<M = Map<any, any>> = M extends Map<infer K, any>
  ? K
  : never;

export const upsert = <T extends Map<any, any>>(
  map: T,
  key: KeyOfMap<T>,
  update: (value?: ValueOfMap<T>) => ValueOfMap<T>,
  def?: () => ValueOfMap<T>
): T => map.set(key, update(map.get(key) ?? def()));
