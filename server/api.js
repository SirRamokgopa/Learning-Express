const express = require('express');
const apiRouter = express.Router();
const db = require("./db.js")

// Function to check IDs ///////////////////////////////////////////////////////////
apiRouter.param("id", (req, res, next, id) => {
    const model = req.path.split("/").reverse()[1];
    id = +id;
    // Check for valid  ID
    if (!(typeof(id) === 'number' &&
    isFinite(id) &&
    Math.round(id) === id)) {
        console.log("*** aint no number, bra")
        res.status(404).send(`Invalid ${model.slice(0,-1)} id`);
        return;
    } else if (typeof db.getFromDatabaseById(model, id.toString()) === "undefined") {
        res.status(404).send(`${model.slice(0,-1)} does not exist`);
        return;
    }
    next();
});

// Minions /////////////////////////////////////////////////////////////////////////
apiRouter.get("/minions", (req, res, next) => {
    const model = "minions";
    const minions  = db.getAllFromDatabase(model); 
    res.body = minions;
    res.status(200).send(minions);
    next();
});

apiRouter.get("/minions/:id", (req, res, next) => {
    const model = "minions";
    const minionId = req.params.id;
    const minion = db.getFromDatabaseById(model, minionId.toString());
    res.body = minion;
    res.status(200).send(minion);
    next();
});

apiRouter.delete("/minions/:id", (req, res, next) =>{
    const model = "minions";
    const minionId = req.params.id;
    const deleted = db.deleteFromDatabasebyId(model, minionId.toString());
    if (!deleted) {
        res.sendStatus(500);
        return;
    }
    res.sendStatus(204);
});


// Ideas ////////////////////////////////////////////////////////////////////////////
apiRouter.get("/ideas", (req, res, next) => {
    const model = "ideas";
    const ideas  = db.getAllFromDatabase(model); 
    res.body = ideas;
    res.status(200).send(ideas);
    next();
});

apiRouter.get("/ideas/:id", (req, res, next) => {
    const model = "ideas";
    const ideaId = req.params.id;
    const idea = db.getFromDatabaseById(model, ideaId.toString());
    res.body = idea;
    res.status(200).send(idea);
    next();
});

apiRouter.delete("/ideas/:id", (req, res, next) =>{
    const model = "ideas";
    const ideaId = req.params.id;
    const deleted = db.deleteFromDatabasebyId(model, ideaId.toString());
    if (!deleted) {
        res.sendStatus(500);
        return;
    }
    res.sendStatus(204);
});


// Meetings /////////////////////////////////////////////////////////////////////////
apiRouter.get("/meetings", (req, res, next) => {
    const model = "meetings";
    const meetings  = db.getAllFromDatabase(model); 
    res.body = meetings;
    res.status(200).send(meetings);
    next();
});

apiRouter.delete("/meetings", (req, res, next) =>{
    const model = "meetings";
    const deleted = db.deleteAllFromDatabase(model);
    res.sendStatus(204);
});
 
module.exports = apiRouter;
