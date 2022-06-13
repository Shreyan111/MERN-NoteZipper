const express = require('express');
const router = express.Router();
const { getNotes, createNote, getNoteById, deleteNote, updateNote } = require("../controllers/noteController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getNotes);

router.route("/create").post(protect, createNote);

router
    .route("/:id")
    .get(getNoteById)
    .delete(protect, deleteNote)
    .put(protect, updateNote);

module.exports = router;