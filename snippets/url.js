// parsing urls and breaking downinto parts
const { hostname } = require('os');
const url = require('url');
console.log(url);

let urlAddress = 'http://localhost:3400/price?year=2017&month=february#hash';
let urlObj = new URL(urlAddress);
console.log(urlObj, 40)

// {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'www.example.com:8080',
//     port: '8080',
//     hostname: 'www.example.com',
//     hash: '#hash',
//     search: '?name=value',
//     query: 'name=value',
//     pathname: '/path',
//     path: '/path?name=value',
//     href: 'https://www.example.com:8080/path?name=value#hash'
//   }


// const urlObject = {
//     protocol: 'https:',
//     hostname: 'www.example.com',
//     pathname: '/path',
//     search: '?name=value'
// };

const urlObject = {
    protocol:'http',
    hostname:'google.com',
    pathname:"/price",
    search:'?year=2017'
}
const formattedUrl = url.format(urlObject);
console.log(formattedUrl,40)


const resolvedUrl = url.resolve('https://www.google.com/foo/', 'bar');

console.log(new URL(urlAddress).searchParams)
console.log(new URL(urlAddress).searchParams.append("newKey","22"))
console.log(resolvedUrl)
