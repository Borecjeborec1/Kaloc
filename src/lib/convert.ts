export function convert(source: string) {
  let data = vars(source);
  return data
}

function vars(source: string) {
  let data = source.replace(/filip's |kuba's /g, (e) => {
    console.log(e)
    return e
  });
  return data
}

const keywords = {
  "filip's": "let",
  "kuba's": "const",
}