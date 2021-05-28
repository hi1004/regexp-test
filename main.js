let str =`
010-1234-5678.
kipo09@gmail.com
https://www.omdbapi.com/?apikey=1234567&s=frozen
The quick brown fox jumps over the lazy dog.
abbccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`


const h = `  the hello  world   !`
// const regexp = new RegExp('the', 'gi')
const regexp = /The/gi
console.log(str.match(regexp))

console.log(
  str.match(/(?<=@).{1,}/g)
  )
console.log(
  h.replace(/\s/g, '')
)
str = str.replace(regexp, 'AAA')
console.log(str)

