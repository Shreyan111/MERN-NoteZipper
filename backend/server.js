const express = require('express');
// const notes = require('./data/notes');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const { errorHandler, notFound } = require("./middleware/errorMiddleware.js");
const path = require('path');

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("API is running..");
// })

// app.get('/api/notes', (req, res) => {
//     res.json(notes);
// })

app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);

app.use(notFound);
app.use(errorHandler);

// app.get('/api/notes/:id', (req, res) => {
//     const note = notes.find((n) => n._id === req.params.id);
//     console.log(req.params);

//     res.send(note);
// })

// --------------------------deployment------------------------------
// __dirname = path.resolve();

if (process.env.NODE_ENV == "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));

    app.get("*", (req, res) =>
        res.sendFile(path.join(__dirname, '../frontend/build', "index.html"))
    );
} else {
    app.get("/", (req, res) => {
        res.status(200).send("API is running..")
        // res.send("API is running..");
    });
}
// --------------------------deployment------------------------------

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));