const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.use('/images', express.static(process.cwd() + '/images'));

app.use(session({
    secret:'my-secret',
    resave:false,
    saveUninitialized:true
}));

app.get('/set-session', function(req, res) {
    req.session.username = 'Alice';
    res.send('Session username set to Alice');
});

app.get('/', function(req, res){

    let username = req.session.username || 'Alice';
    res.render('index', {username});
});

app.listen(port, function(){
    console.log(`Express app listening on port ${port}!`);
})
