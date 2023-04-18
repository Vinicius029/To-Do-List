const validateFieldTitle = (req, res, next) => {

    const { body } = req;

    if (body.title === undefined){
        return res.status(400).json({ message: "O campo TITULO é obrigatório! "})
    }

    if (body.title === ""){
        return res.status(400).json({ message: "O campo TITULO é não pode ser vazio! "})
    }

    next();
}


const validateFieldStatus = (req, res, next) => {

    const { body } = req;

    if (body.status === undefined){
        return res.status(400).json({ message: "O campo STATUS é obrigatório! "})
    }

    if (body.status === ""){
        return res.status(400).json({ message: "O campo STATUS é não pode ser vazio! "})
    }

    next();
}

module.exports = {
    validateFieldTitle,
    validateFieldStatus
}