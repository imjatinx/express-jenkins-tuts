import express from 'express'

const app = express()
const PORT = process.env.PORT || 5000
const APP_NAME = process.env.APP_NAME || "Default Express App"

app.get("/", (req, res) => {
    res.json({
        success: true,
        port: PORT,
        app: APP_NAME,
        env: process.env.NODE_ENV || "development",
        message: "CI/CD with GitHub Actions is working. Pipeline test - v8"
    })
})

app.get("/health", (req, res) => {
  res.status(500).send("NOT OK");
});


app.get(`/:user`, (req, res) => {
    const { user } = req.params;

    res.json({
        success: true,
        message: `Hello ${user}`
    })
})

app.listen(PORT, () => {
    console.log(`${APP_NAME} running on port ${PORT}`)
})