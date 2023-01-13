const tryCatch = (param) => async(req, res, next) => {
    try {
        await param(req, res)
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message })
        next(error)
    }
}

module.exports = {tryCatch}