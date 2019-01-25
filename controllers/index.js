module.exports.homePage = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dist/index.html'));
}
