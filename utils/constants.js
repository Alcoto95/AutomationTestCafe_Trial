import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

export const todoistBaseUrl = process.env.TODOIST_BASE_URL
export const validEmail = process.env.VALID_USER
export const validPassword = process.env.VALID_PASS
export const taskName = 'New Task ' + parseInt(Math.random() * 100000)
