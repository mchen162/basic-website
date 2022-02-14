//Imports
const express = require('express');
const app = express();
//const port = '';

//Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

//set views
app.set('views', './views');
app.set('view engine', 'ejs');

//set routes
app.get('', (req, res) =>{
  res.render('index', { text: ' This is EJS' })
});


app.get('/about', (req, res) => {
  res.render('about', { text: 'About Me'})
});

//
let listener = app.listen(); 
console.log(`Listening to port number ${listener.address().port}`);

//app.listen(port, () => console.info(`App listen on port ${port}`));
