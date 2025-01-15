const express = require("express")
const router = express.Router()
const { getNotes, postNote, editNote, deleteNote, getNote } = require("../controllers/notes.controllers")


router.get("/api/notes", async (req, res) => await getNotes(req, res))
router.get("/api/notes/:noteId", async (req, res) => await getNote(req, res))
router.post("/api/notes", async (req, res) => await postNote(req, res))
router.put("/api/notes/:noteId", async (req, res) => await editNote(req, res))
router.delete("/api/notes/:noteId", async (req, res) => await deleteNote(req, res))

module.exports = router