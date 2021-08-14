const express = require('express');
const animals = express.Router();
const Entry = require('../models/animals.js');

animals.get('/', (req, res) => {
    Entry.find({}, (err, animalEntry) => {
        res.json(animalEntry)
    })
})

animals.post('/', (req, res) => {
    Entry.create({}, (err, animalEntry) => {
        Entry.find({}, (err, animalEntry) => {
            res.json(animalEntry)
        })
    })
})


animals.put('/:id', (req, res) => {
    Entry.findByIdAndUpdate(req.params.id, req.body, {new: true}, 
        (err, updateEntry) => {
            if(err){
                res.send(err)
            }else{
                Entry.find({}, (err, updateEntry) => {
                    res.json(updateEntry)
                })
            }
    })
})


animals.delete('/:id', (req, res) => {
    Entry.findByIdAndRemove(req.params.id, (err, deletedEntry) => {
        Entry.find({}, (err, foundEntry) => {
            res.json(foundEntry)
        })
    })
})

module.exports = animals;