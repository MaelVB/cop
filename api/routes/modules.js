const express = require('express');

const modulesRouter = express.Router();
let Modules = require('../schemas/modules.model');

modulesRouter.route('/').get(function(req, res) {
    Modules.find(function(err, modules) {
        if (err) {
            console.log(err);
        } else {
            res.json(modules);
        }
    });
});

modulesRouter.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Modules.findById(id, function(err, modules) {
        res.json(modules);
    });
});

modulesRouter.route('/update/:id').post(function(req, res) {
    Modules.findById(req.params.id, function(err, modules) {
        if (!modules)
            res.status(404).send("data is not found");
        else
            modules.todo_description = req.body.todo_description;
            modules.todo_responsible = req.body.todo_responsible;
            modules.todo_priority = req.body.todo_priority;
            modules.todo_column = req.body.todo_column;
            modules.todo_completed = req.body.todo_completed;
            modules.save().then(modules => {
                res.json('Modules updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

modulesRouter.route('/add').post(function(req, res) {
    let modules = new Modules(req.body);
    console.log(modules)
    modules.save()
        .then(modules => {
            res.status(200).json({'modules': 'modules added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new modules failed');
        });
});

module.exports = modulesRouter;