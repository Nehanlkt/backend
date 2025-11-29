const express=require('express')
const app=express()


// const hostname = '127.0.0.1';
const port = 3000;
app.get('/',(req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.send('<h1>Hello mm</h1> ');
});
app.get('/about',(req, res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    res.send('about us');
});
app.get('/contact',(req, res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    res.send('contact us ');
});
app.get('/ans',(req, res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    res.send('ans me ');
});
// app.get('/ans/intro-to-py',(req, res) => {
//     res.statusCode = 200;
//     // res.setHeader('Content-Type', 'text/html');
//     res.send('ans me ');
// });
// app.get('/ans/intro-to-java',(req, res) => {
//     res.statusCode = 200;
//     // res.setHeader('Content-Type', 'text/html');
//     res.send('ans me ');
// });
app.get('/ans/:slug/:second',(req, res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    console.log(req.params)
    res.send('ans me ${req.params.slug} and ${req.params.second');
    
});

app.listen(port,  () => {
    console.log(`app listen ${port}`);
});