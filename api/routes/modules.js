/**
 * /modules
 */

const express = require('express');

const modulesRouter = express.Router();
const modulesController = require('../controllers/modules');

/**
 * Get all modules statics infos
 */
modulesRouter.route('/').get(async (req, res) => {
    try {
        res.json(await modulesController.getModules());
    } catch (err) {
        next (err);
    }
});

/**
 * Get a module static info
 */
modulesRouter.route('/:id').get(async (req, res) => {
    try {
        res.json(await modulesController.getModule(req));
    } catch (err) {
        next(err);
    }
});

/**
 * Create a card
 */
modulesRouter.route('/').post(async (req, res) => {
    try {
        res.json(await modulesController.createModule(req));
    } catch (err) {
        next(err);
    }
});

/**
 * Update a card
 */
modulesRouter.route('/:id').put(async (req, res) => {
    try {
        res.json(await modulesController.setModule(req));
    } catch (err) {
        next(err);
    }
});

/**
 * Remove a card
 */
modulesRouter.route('/:id').delete(async (req, res) => {
    try {
        res.json(await modulesController.deleteModule(req));
    } catch (err) {
        next(err);
    }
});

module.exports = modulesRouter;