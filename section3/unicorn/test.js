let http = require('http');

let ourApp = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello, and Welcome to our website.');
    } 

    if (req.url === '/about') {
        res.end('Thank you for the interest in our company.');
    }

    res.end('We cannot find the page you are looking for.');
});
ourApp.listen(3000);
