const url = require('url')

const testUrl = 'http://localhost:8080/one?a=index&t=article#abcd'

// url.parse(urlStr, [parseQueryString], [slashesDenoteHost]);
//   urlStr -- url字符串
//   parseQueryString -- 为true时将使用查询模块分析查询字符串，默认为false
//   slashesDenoteHost               
//       默认为false，//foo/bar 形式的字符串将被解释成 { pathname: ‘//foo/bar' }
//       如果设置成true，//foo/bar 形式的字符串将被解释成  { host: ‘foo', pathname: ‘/bar' }
const resultUrl = url.parse(testUrl, true)

console.log('resultUrl.href:', resultUrl.href) // http://localhost:8080/one?a=index&t=article#abcd
console.log('resultUrl.protocol:', resultUrl.protocol) // http:
console.log('resultUrl.host:', resultUrl.host) // localhost:8080
console.log('resultUrl.hostname:', resultUrl.hostname) // localhost
console.log('resultUrl.port:', resultUrl.port) // 8080
// resultUrl.path中不包含resultUrl的hash值
console.log('resultUrl.path:', resultUrl.path) // /one?a=index&t=article
console.log('resultUrl.pathname:', resultUrl.pathname) // /one
// resultUrl.search中不包含resultUrl的hash值
console.log('resultUrl.search:', resultUrl.search) // ?a=index&t=article
console.log('resultUrl.query:', resultUrl.query) // { a: 'index', t: 'article' }
console.log('resultUrl.slashes:', resultUrl.slashes) // true
console.log('resultUrl.hash:', resultUrl.hash) // #abcd
console.log('resultUrl.auth:', resultUrl.auth) // null

