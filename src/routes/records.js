const express = require('express');
const router = express.Router();

const { getRecords, getRecordId, editRecordId, deleteRecordId, createRecord } = require('../controllers/recordsController.js')


router.route('/')
.get(getRecords)
.post(createRecord)

router.route("/:id")
.get(getRecordId)
.put(editRecordId)
.delete(deleteRecordId)

module.exports = router;