var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/audio', function(req, res, next) {
//   res.render('audio', {title: 'Express'});
// });


// router.get('/', function(req, res) {
//   res.sendFile('/views/audio.html', {root: __dirname});
// });

//const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
  // res.send("Hello from Express!");
  console.log("index!");
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/audio", (req, res) => {
  // res.send("Hello from audio!");
  console.log("audio!");
  res.sendFile(path.join(__dirname, "../views/audio.html"));
});

router.get("/video", (req, res) => {
  // res.send("Hello from audio!");
  console.log("video!");
  res.sendFile(path.join(__dirname, "../views/video.html"));
});

// catches broken routes
router.use((req, res) => {
  // console.log("page does not exist");
  res.sendFile(path.join(__dirname, "../views/error.html"));
});

module.exports = router;
