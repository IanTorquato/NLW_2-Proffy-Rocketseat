import express from 'express'

import Classes from './controllers/Classes'

const classes = new Classes

const routes = express.Router()

routes.post('/classes', classes.create)

export default routes 