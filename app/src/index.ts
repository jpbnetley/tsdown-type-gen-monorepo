import { MemoryCache } from '@tsdowndts/lib/cache'
import { AppLogger } from '@tsdowndts/lib/log'

/**
 * The go to definition for AppLogger.info is in lib/src/log/AppLogger.ts
 * But thh IDE is not resolving it correctly through the index.ts barrel file.
 * The IDE is going to ./lib/src/log/log.ts - this is incorrect.
 */
AppLogger.info('Starting application...')
AppLogger.info('Application has started.')

const cache = MemoryCache.getInstance<string, number>()
AppLogger.info('Storing value in memory cache.')
cache.set('exampleKey', 42)
AppLogger.info('Value stored in memory cache.')
const value = cache.get('exampleKey')
AppLogger.info(`Cached value for 'exampleKey': ${value}`)
