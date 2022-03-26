import { convert } from './lib/convert'
function interpret(source: string) {
  let data = convert(source)
  return data
}

export { interpret }