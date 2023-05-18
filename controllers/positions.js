const Position = require("../models/position");

module.exports = {
    index,
    new: newPosition,
    create,
};

async function index(req, res) {
    try {
        const list = await Position.find({ user: req.user.id }).lean();
        res.render("positions/index", {
            list,
            name: req.user.firstName,
            title: "Hired"
        });
    } catch (err) {
        console.error("Error : " + err);
        res.render("error");
    }
}

function newPosition(req, res) {
    res.render("positions/new", { title: "Hired" });
}

async function create(req, res) {
    try {
        req.body.user = req.user.id;
        await Position.create(req.body);
        res.redirect("/positions");
    } catch (err) {
        console.error("Error : " + err);
        res.render("error");
    }
}