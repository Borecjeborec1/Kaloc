export function convert(source: string) {
  let data = singleRegex(source);
  return data
}
const keywords: { [key: string]: any } = {
  "filip's ": "let ",
  "kuba's ": "const ",
  " equals ": " === ",
  " not equals ": " !== ",
  " is greater than ": " > ",
  " is greater than or equals ": " >= ",
  " is less than ": " < ",
  " is less than or equals ": " <= ",
  " and ": " && ",
  " or ": " || ",
  " not ": " ! ",
  " is ": " = ",
}
function singleRegex(source: string) {
  for (let keyword in keywords) {
    source = source.replace(new RegExp(keyword, 'g'), keywords[keyword]);
  }
  return source
}

