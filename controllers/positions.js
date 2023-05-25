const Position = require("../models/position");

module.exports = {
    index,
    new: newPosition,
    create,
    show,
    delete: deletePosition,
    update
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

async function show(req, res) {
    try {
        const position = await Position.findById(req.params.id);
        if (position.user.equals(req.user._id)) {
            res.render("positions/show", { position, title: "Hired" });
        } else {
            res.redirect("/positions");
        }
    } catch (err) {
        console.error("Error : " + err);
        res.render("error");
    }
}

async function update(req, res) {
    try {
        await Position.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true },);
            const dropdown = document.getElementById('hidden-edit')
            dropdown.classList.toggle('show')
    } catch {
        res.render("error");
    }
    res.redirect(`/positions/${req.params.id}`);
}


async function deletePosition(req, res) {
    try {
        const position = await Position.findOneAndDelete({
            '_id': req.params.id,
            'user': req.user.id
        });
        
        if (!position) return res.redirect('/positions');
    } catch (err) {
        console.log(err);
    }

    res.redirect('/positions');
}
