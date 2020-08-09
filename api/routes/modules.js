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
        res.json(await modulesController.getModuleList());
    } catch (err) {
        console.error(err);
    }
});

/**
 * Get a module static info
 */
modulesRouter.route('/:id').get(async (req, res) => {
    try {
        res.json(await modulesController.getModule(req));
    } catch (err) {
        console.error(err);
    }
});

/**
 * Create a card
 */
modulesRouter.route('/').post(async (req, res) => {
    try {
        res.json(await modulesController.createModule(req));
    } catch (err) {
        console.error(err);
    }
});

/**
 * Update a card
 */
modulesRouter.route('/:id').put(async (req, res) => {
    try {
        res.json(await modulesController.setModule(req));
    } catch (err) {
        console.error(err);
    }
});

/**
 * Remove a card
 */
modulesRouter.route('/:id').delete(async (req, res) => {
    try {
        res.json(await modulesController.deleteModule(req));
    } catch (err) {
        console.error(err);
    }
});

module.exports = modulesRouter;