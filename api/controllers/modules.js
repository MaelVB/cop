let Modules = require('../schemas/modules.model');

const getModuleList = async () => {
    try {
        const getModules = await Modules.find({});
        return getModules;
    } catch (err) {
        console.error(err);
    }
};

const getModule = async (req) => {
    try {
        const id = req.params.id;
        const getModule = await Modules.findById(id).exec();
        return getModule;
    } catch (err) {
        console.error(err);
    }
};

const createModule = async (req) => {
    try {
        const createModule = await Modules.create(req.body);
        return createModule;
    } catch (err) {
        console.error(err);
    }
};

const setModule = async (req) => {
    try {
        const id = req.params.id;
        const setModule = await Modules.findByIdAndUpdate(id, {
            description: req.body.description,
            completed: req.body.author
        });
        return setModule;
    } catch (err) {
        console.error(err);
    }
};

const deleteModule = async (req) => {
    try {
        const id = req.params.id;
        const deleteModule = await Modules.findByIdAndDelete(id).exec();
        return deleteModule;
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    getModuleList,
    getModule,
    createModule,
    setModule,
    deleteModule
};