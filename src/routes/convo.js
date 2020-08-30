const express = require('express')
const router = express.Router()

router.get('/')
router.get('/:id')
router.get('/:status')
router.post('/')
router.delete('/:id')
router.put('/:id')

module.exports = router