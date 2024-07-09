import * as package_1 from '../_dependencies/onchain/0x1/init'
import * as package_2 from '../_dependencies/onchain/0x2/init'
import * as package_91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1 from '../turbos/init'
import { structClassLoaderOnchain as structClassLoader } from './loader'

let initialized = false
export function initLoaderIfNeeded() {
  if (initialized) {
    return
  }
  initialized = true
  package_1.registerClasses(structClassLoader)
  package_2.registerClasses(structClassLoader)
  package_91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1.registerClasses(
    structClassLoader
  )
}
