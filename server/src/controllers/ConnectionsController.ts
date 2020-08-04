import { Request, Response } from 'express'
import knex from '../database/connection'

export default class Connections {
  async create(request: Request, response: Response) {
    const { user_id } = request.body

    try {
      console.log(user_id)
      await knex('connections').insert({ user_id })

      return response.status(201).send()
    } catch (error) {
      console.log(error)
      return response.status(400).send()
    }
  }

  async index(request: Request, response: Response) {
    const totalConnections = await knex('connections').count('* as total')

    const { total } = totalConnections[0]

    return response.json({ total })
  }
}