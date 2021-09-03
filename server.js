/*
A very basic server made with node js. The objective here it's only
to create and show something in the browser, with and without formating (eg. html format)
*/

const http = require('http')

http.createServer((req,res)=>{
    res.end(`
    Jonatan Magrao
    Practicing creating server with node. It seems to be easier than i thought.
    Of course, putting files like html seems to be quite hard for me now, but i know i'll reach it soon!
    `)
}).listen(3000)