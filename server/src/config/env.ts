import dotenv from 'dotenv'
import path from 'path'

export const env = () => {
  dotenv.config({ path: path.join(__dirname, '..', '..', '.env') })
}
