import express from 'express'
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from '../controllers/user.js'
import { verifyToken, verifyUser, verifyIsAdmin } from '../utils/verifyToken.js'

const router = express.Router()

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//   res.send('Hello user, you are login')
// })

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send('Hello user, you are logged in and you can delete your account')
// })

// router.get('/checkadmin/:id', verifyIsAdmin, (req, res, next) => {
//   res.send('Hello admin, you are logged in and you can delete all account')
// })

// UPDATE
router.put('/:id', verifyUser, updateUser)

// DELETE
router.delete('/:id', verifyUser, deleteUser)

// GET
router.get('/:id', verifyUser, getUser)

// GET ALL
router.get('/', verifyIsAdmin, getUsers)

export default router
