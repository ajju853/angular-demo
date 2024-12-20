// project/routes/person.js
const express = require('express');
const router = express.Router();
const Person = require('../models/person');

// GET /person
router.get('/', async (req, res) => {
    const people = await Person.find();
    res.json(people);
});

// POST /person
router.post('/', async (req, res) => {
    const person = new Person(req.body);
    await person.save();
    res.status(201).json(person);
});

// PUT /person/:id
router.put('/:id', async (req, res) => {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(person);
});

// DELETE /person/:id
router.delete('/:id', async (req, res) => {
    await Person.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;