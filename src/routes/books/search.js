const express = require('express');
const router = express.Router();
const { getAllBooks, addBook } = require('../../controllers/bookController');
const { bookValidationRules, validate } = require('../../middleware/validation');

// Define book routes here

// GET /books
router.get('/get-all', getAllBooks);
router.post('/', bookValidationRules(), validate, addBook)



module.exports = router;
