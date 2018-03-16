import { mergeWith, isArray } from 'lodash'

function mergeArrays(objValue, srcValue) {
  if (isArray(objValue) && isArray(srcValue)) {
    return objValue.concat(srcValue)
  }
  return null
}

const dependencies = {}

export const registerDependencies = dep =>
  mergeWith(dependencies, dep, mergeArrays)

export default dependencies
