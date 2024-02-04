import { DB } from './db'

export class Teardown {
  static init() {
    process.on('SIGINT', async () => {
      await this.graceful()
      process.exit(0)
    })
    process.on('SIGTERM', async () => {
      await this.graceful()
      process.exit(0)
    })
  }

  static async graceful() {
    console.log('gracefully shutting down the server')
    await DB.disconnect()
    console.log('Disconnected from database')
  }
}
