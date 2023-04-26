import express from 'express'
import { createUser, loginUser } from '../controllers/auth.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello, this is auth endpoint')
})

router.post('/register', createUser)
router.post('/login', loginUser)

export default router
