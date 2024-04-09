const postDog = require("../controllers/postDog")

const handlerPost = async (req, res) => {
    try {
        await postDog(req.body);
        
    } catch (error) {
        
    }
}