exports.test = (req, res) => {
    console.log("hola controller")
    res.status(200).send ("hola desde controller")
}