const postDog = require("../controllers/postDog")

const handlerPost = async (req, res) => {
    try {
        const created = await postDog(req.body);
        if(created === true)
            return res.status(201).send("Raza creada.")
        else
            return res.status(409).send(created);
    } catch (error) {
        return res.status(404).send(error.message);
    }
}

module.exports = handlerPost;