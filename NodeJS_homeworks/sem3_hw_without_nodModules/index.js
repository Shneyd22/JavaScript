const express = require('express');
const fs = require('fs');
const path = require('path')
app = express();

const pathToCounter = path.join(__dirname, '/counter.json');

app.get('/', (req, res) => {

    const visitCountMainPageData = JSON.parse(fs.readFileSync(pathToCounter, 'utf-8'));
    visitCountMainPageData.mainPageVisitCounter++;
    fs.writeFileSync(pathToCounter, JSON.stringify(visitCountMainPageData, null, 2));
    res.send(`
    <h1>Главная страница</h1>
    <a href="/about">Обо мне</a>
    <p>Количество просмотров: ${visitCountMainPageData.mainPageVisitCounter}</p>
`)
    console.log('Запрос получен');
});


app.get('/about', (req, res) => {
    const visitCountAboutPageData = JSON.parse(fs.readFileSync(pathToCounter, 'utf-8'));
    visitCountAboutPageData.aboutPageVisitCounter++;
    fs.writeFileSync(pathToCounter, JSON.stringify(visitCountAboutPageData, null, 2));
    res.send(`
    <h1>Обо мне</h1>
    <a href="/">Главная страница<</a>
    <p>Количество просмотров: ${visitCountAboutPageData.aboutPageVisitCounter}</p>
`);
    console.log('Запрос получен');
})

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})