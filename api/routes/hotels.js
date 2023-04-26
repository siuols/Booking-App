import express from 'express'
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from '../controllers/hotel.js'
import { verifyIsAdmin } from '../utils/verifyToken.js'

const router = express.Router()

// CREATE
router.post('/', verifyIsAdmin, createHotel)

// UPDATE
router.put('/:id', verifyIsAdmin, updateHotel)

// DELETE
router.delete('/:id', verifyIsAdmin, deleteHotel)

// GET
router.get('/:id', getHotel)

// GET ALL
router.get('/', getHotels)

export default router
