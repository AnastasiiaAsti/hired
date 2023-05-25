const Position = require("../models/position");

module.exports = {
    create,
}

async function create(req, res) {
    const position = await Position.findById(req.params.id);
    try {
        await position.save()
    } catch (err) {
        res.render("error");
    }
    res.redirect(`/positions/${position._id}`)
}