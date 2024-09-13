const http = require('http');
let mainPageLoadCounter = 0;
let aboutPageLoadCounter = 0;
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
        });
        mainPageLoadCounter++;
        res.end(`<a href="/about">About</a><br><h3>Количество загрузок страницы: ${mainPageLoadCounter}</h3>`);
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
        });
        aboutPageLoadCounter++;
        res.end(`<a href="/">Main</a><br><h3>Количество загрузок страницы: ${aboutPageLoadCounter}</h3>`);
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
        });
        res.end('<h1>Err.404 Page not found</h1>');
    }
});
const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});

