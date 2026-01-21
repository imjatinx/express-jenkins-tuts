import express from 'express'

const app = express()
const PORT = process.env.PORT || 8081

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "CI/CD with GitHub Actions is working. Pipeline test - v2"
    })
})

app.get(`/:user`, (req, res) => {
    const { user } = req.params;

    res.json({
        success: true,
        message: `Hello ${user}`
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})