/**
 * /kanban
 */

const express = require('express');

const kanbanRouter = express.Router();
const kanbanController = require('../controllers/kanban');

/**
 * Get all cards
 */
kanbanRouter.route('/').get(async (req, res) => {
    try {
        res.json(await kanbanController.getKanban());
    } catch (err) {
        next (err);
    }
});

/**
 * Get a card
 */
kanbanRouter.route('/:id').get(async (req, res) => {
    try {
        res.json(await kanbanController.getCard(req));
    } catch (err) {
        next(err);
    }
});

/**
 * Create a card
 */
kanbanRouter.route('/').post(async (req, res) => {
    try {
        res.json(await kanbanController.createCard(req));
    } catch (err) {
        next(err);
    }
});

/**
 * Update a card
 */
kanbanRouter.route('/:id').put(async (req, res) => {
    try {
        res.json(await kanbanController.setCard(req));
    } catch (err) {
        next(err);
    }
});

/**
 * Remove a card
 */
kanbanRouter.route('/:id').delete(async (req, res) => {
    try {
        res.json(await kanbanController.deleteCard(req));
    } catch (err) {
        next(err);
    }
});

module.exports = kanbanRouter;