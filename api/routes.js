const express = require('express');

const publicRouter = express.Router();
const modulesRoute = require('./routes/modules');
const kanbanRoute = require('./routes/kanban');

publicRouter.use('/modules', modulesRoute);
publicRouter.use('/kanban', kanbanRoute);

module.exports = publicRouter;