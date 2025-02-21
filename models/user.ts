import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  progress: {
    type: Map,
    of: [Boolean], // Store completed tasks as an array of booleans for each day
  },
})

const User = mongoose.models.User || mongoose.model('User', UserSchema)
export default User
