import mongoose from 'mongoose'
require('dotenv').config()

async function dbConnection() {
  try {
    mongoose.connect(process.env.DB_CNN || '')
    console.log('DB online')
  } catch (error) {
    console.error(error)
    throw new Error('An error occurred while connecting to DB')
  }
}

export = dbConnection
