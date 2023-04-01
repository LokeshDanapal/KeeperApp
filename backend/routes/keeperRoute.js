const express = require('express');

const notesCntrl = require("../Controller/Notes");

const router = express.Router();

router.post('/addNotes',notesCntrl.createNotes);

router.post('/LoadNotes',notesCntrl.LoadNotes);

module.exports = router;