const express = require('express'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 5500;
app.use('/static', express.static(path.resolve(__dirname, 'front-end', 'static')))
app.use('/parts', express.static(path.resolve(__dirname, 'front-end', 'parts')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve('front-end', 'index.html'))
})
app.get('/about', (req, res) => {
    res.sendFile(path.resolve('front-end', 'about.html'))
})
app.get('/contact', (req, res) => {
    res.sendFile(path.resolve('front-end', 'contactUs.html'))
})
app.get('/products', (req, res) => {
    res.sendFile(path.resolve('front-end', 'products.html'))
})
app.get('/services', (req, res) => {
    res.sendFile(path.resolve('front-end', 'services.html'))
})
app.get('/customers', (req, res) => {
    res.sendFile(path.resolve('front-end', 'customers.html'))
})
app.get('/industrialRobots', (req, res) => {
    res.sendFile(path.resolve('front-end', 'robots.html'))
})
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})