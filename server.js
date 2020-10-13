// Dependecies
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serves html files
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// Reads jb.json file and returns saved notes (unfinished)
// app.get("/api/notes", function(req, res) {
//     var notes = 

//     return res.json()
// });

// Posts new notes to database (unfinished)
// app.post("/api/notes", function(req, res) {
//     var newNote = req.body;
//     console.log(newNote);

//     res.json(newNote);
// })

// Deletes notes (unfinished)
// app.delete("api/notes/:id", function(req, res) {
//     var noteID = req.params.id;

//     console.log(noteID);


// })


app.listen(PORT, function() {
    console.log("App listening on Port" + PORT);
});