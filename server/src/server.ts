import express from 'express'

const app = express()

app.use(express.json())

app.get('/users', (request, response) => {
  return response.json({ nome: 'Ian', idade: 18 })
})

app.listen(3333)