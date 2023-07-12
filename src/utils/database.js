import mongoose from 'mongoose'

const URI =
  'mongodb+srv://admin:qI4plfokXVhTWWvY@cluster0.vo71ehl.mongodb.net/?retryWrites=true&w=majority'

const databaseConnection = async () => {
  if (!global.mongoose) {
    mongoose.set('strictQuery', false)
    global.mongoose = await mongoose.connect(URI)
  }
}

export default databaseConnection
