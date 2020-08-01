const express = require('express');

const kanbanRouter = express.Router();
const kanbanController = require('../controllers/kanban');

kanbanRouter.route('/').get(async (req, res) => {
    try {
        res.json(await kanbanController.getKanban());
    } catch (err) {
        next (err);
    }
});

kanbanRouter.route('/:id').get(async (req, res) => {
    try {
        res.json(await kanbanController.getCard(req));
    } catch (err) {
        next(err);
    }
});

kanbanRouter.route('/update/:id').post(async (req, res) => {
    try {
        res.json(await kanbanController.setCard(req));
    } catch (err) {
        next(err);
    }
});

kanbanRouter.route('/add').post(async (req, res) => {
    try {
        res.json(await kanbanController.createCard(req));
    } catch (err) {
        next(err);
    }
});

module.exports = kanbanRouter;