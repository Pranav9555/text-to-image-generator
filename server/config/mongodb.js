import mongoose from "mongoose"

const connectDB = async () => {

  mongoose.connection.on('connected',() => {
     console.log("database connected succesfully")
  })
   await mongoose.connect(`${process.env.MONGODB_URL}/imageG`)

}
export {connectDB}