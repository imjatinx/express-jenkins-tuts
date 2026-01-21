import express from 'express'

const app = express()
const PORT = process.env.PORT || 8081

app.get("/", (req, res)=>{
    res.json({
        success: true,
        message: "CI/CD with GitHub Actions is working."
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})