import express from 'express'

import Classes from './controllers/Classes'

const classes = new Classes

const routes = express.Router()

routes.post('/classes', classes.create)
routes.get('/classes', classes.index)

export default routes 