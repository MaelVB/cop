let Kanban = require('../schemas/kanban.model');

const getKanban = async () => {
    try {
        const getKanban = await Kanban.find({});
        return getKanban;
    } catch (err) {
        console.error(err);
    }
};

const getCard = async (req) => {
    try {
        const id = req.params.id;
        const getCard = await Kanban.findById(id).exec();
        return getCard;
    } catch (err) {
        console.error(err);
    }
};

const createCard = async (req) => {
    try {
        const createCard = await Kanban.create(req.body);
        return createCard;
    } catch (err) {
        console.error(err);
    }
};

const setCard = async (req) => {
    try {
        const id = req.params.id;
        const setCard = await Kanban.findByIdAndUpdate(id, {
            description: req.body.description,
            author: req.body.author,
            priority: req.body.author,
            completed: req.body.author
        });
        return setCard;
    } catch (err) {
        console.error(err);
    }
};

const deleteCard = async (req) => {
    try {
        const id = req.params.id;
        const deleteCard = await Kanban.findByIdAndDelete(id).exec();
        return deleteCard;
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    getKanban,
    getCard,
    createCard,
    setCard,
    deleteCard
};