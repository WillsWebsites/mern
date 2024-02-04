import mongoose from 'mongoose'

export class DB {
  static instance: typeof mongoose

  static async init() {
    try {
      this.instance = await mongoose.connect(process.env.MONGO_URI)
      console.log('Successfully connected to database')
    } catch (error) {
      console.error('Failed to connect to database:', error)
    }
  }

  static async disconnect() {
    await this.instance.disconnect()
  }
}
