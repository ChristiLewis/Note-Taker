//REQUIRE DATA
// const { db } = require('./db/db.json');
//ACTIVATE EXPRESS AND OTHER NPM MODULES
const express = require('express');
const fs = require('fs');
// const apiRoutes = require('./routes/api-routes')
const htmlRoutes = require('./routes/html-routes')
// const res = require('express/lib/response');
//const path = require('path')

//UNIQUE ID HELPER FROM DATA PERSISTENCE ACTIVITY
// const uuid = require('./helpers/uuid');

//REQUIRE JSON FILE ASSIGN NOTEDATA
// const noteData = require('./db/db.json');

//NA BEC WE ARE USING THE BROWSER
// const PORT = 3001;

//INITIALIZE APP VIA SETTING TO EXPRESS
const app = express();
const PORT = process.env.PORT || 3001;

//URL ENCODED FROM DATA PERSISTENCE ACTIVITY
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
//STATIC ROUTE FOR INDEX.HTML -- NOTE GET() METHOD NEEDS 2 ARGS: FIRST STRING OF ROUTE FETCHING FROM; SECOND CALLBACK FUNCTION  


//SEND METHOD FROM THE RESPONSE OR RES TO SEND THE STRING TO THE
// app.get('/', (req, res) => res.send('Visit http://localhost:3001/api'));

//RETURN JSON VS. BUFFER, STRING OR STATIC
// app.get('/api', (req, res) => res.json(noteData));
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });








//LISTENER AT THE BOT OF PAGE SIM TO EVENT LISTENER
app.listen(3001, () => {
    console.log(`API server now on port 3001`);
});