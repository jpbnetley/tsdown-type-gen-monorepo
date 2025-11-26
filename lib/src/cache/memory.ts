export class MemoryCache<K, V> {
  private static instance: MemoryCache<any, any>
  private cache = new Map<K, V>()

  /**
   * Returns the singleton instance of MemoryCache.
   */
  static getInstance<TK = any, TV = any>(): MemoryCache<TK, TV> {
    if (!MemoryCache.instance) {
      MemoryCache.instance = new MemoryCache<TK, TV>()
    }
    return MemoryCache.instance as MemoryCache<TK, TV>
  }

  /**
   * Stores a value in the cache associated with the specified key.
   *
   * @param key - The key to associate with the value.
   * @param value - The value to store in the cache.
   */
  set(key: K, value: V): void {
    this.cache.set(key, value)
  }

  /**
   * Retrieves the value associated with the specified key from the cache.
   *
   * @param key - The key whose associated value is to be returned.
   * @returns The value associated with the key, or `undefined` if the key does not exist in the cache.
   */
  get(key: K): V | undefined {
    return this.cache.get(key)
  }

  /**
   * Checks if the specified key exists in the memory cache.
   *
   * @param key - The key to check for existence in the cache.
   * @returns `true` if the key exists in the cache, otherwise `false`.
   */
  has(key: K): boolean {
    return this.cache.has(key)
  }

  /**
   * Removes the entry associated with the specified key from the cache.
   *
   * @param key - The key of the entry to delete.
   * @returns `true` if the entry existed and was deleted, `false` otherwise.
   */
  delete(key: K): boolean {
    return this.cache.delete(key)
  }

  /**
   * Removes all entries from the in-memory cache.
   *
   * After calling this method, the cache will be empty.
   */
  clear(): void {
    this.cache.clear()
  }
}
