const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fileUpload = require('express-fileupload');
var methodOverride = require("method-override");

var path = require('path');

// const fileUpload = require('express-fileupload');
//route is required from the route/api folder for use in API calls to the DB
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
app.use(cors());
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(fileUpload());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/cafenoir",
  //local
//mongodb://localhost/articlelist
//production
  // MONGODB_URI: mongodb://heroku_z3wfgmtn:1eq8reut426sujiihnunc167t4@ds249325.mlab.com:49325/heroku_z3wfgmtn
  {
    useMongoClient: true
  }
);
var db = mongoose.connection;
// db.connect(function(){
//   console.log("Connected!")
// })
// db = connect("localhost:27017/myDatabase")

app.post('/api/image', function (req, res) {
console.log("got here");
  let sampleFile = req.body.img;
    var id = 'img1';
    console.log(id);
 
    // Use the mv() method to place the file somewhere on your server
    // console.log(userId);
    sampleFile.mv(path.join(__dirname, 'pic.jpg'), function(err) {
      if (err)
        return res.status(500).send(err);
    
    });


  // var image = ImageUploader({
  //   data_uri: req.body.data_uri,
  //   filename: req.body.filename,
  //   filetype: req.body.filetype
  // }).then(onGoodImageProcess, onBadImageProcess);

  // function onGoodImageProcess(resp) {
  //   // res.send({
  //   //   status: 'success',
  //   //   uri: resp
  //   // });
  //   console.log('success')
  // }

  // function onBadImageProcess(resp) {
  //   // res.send({
  //   //   status: 'error'
  //   // });
  //   console.log('error')
  // }

});

// Upload user image

app.post('/upload/:id', function (req, res) {
  console.log('here');
  if (!req.files)
    // return res.status(400).send('No files were uploaded.');
    console.log('No files were uploaded.');
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
  var id = req.params.id;
  console.log('image id',id);
 console.log((path.join(__dirname, '/user-images/')));
  sampleFile.mv(path.join(__dirname, '/user-images/' + id + '.jpg'), function (err) {
    if (err)
      return res.status(500).send(err);
    // res.redirect('/profile');
  });
});



// app.post('/upload/:id', function(req, res) {
//     if (!req.files)
//       return res.status(400).send('No files were uploaded.');
   
//     // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
//     let sampleFile = req.files.sampleFile;
//     var id = req.params.id;
//     console.log(id);
//     // Use the mv() method to place the file somewhere on your server
//     // console.log(userId);
//     sampleFile.mv(path.join(__dirname, '../public/user-images/' +id+ '.jpg'), function(err) {
//       if (err)
//         return res.status(500).send(err);
//      res.redirect('/profile');
//     });
//   });
// Show any mongoose errors
db.on("error", function (error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function () {
  console.log("Mongoose connection successful.");
});
var authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://desmondtoye.auth0.com/.well-known/jwks.json"
  }),
  audience: 'http//localhost:3001/',
  issuer: "https://desmondtoye.auth0.com/",
  algorithms: ['RS256']
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
