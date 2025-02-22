import mongoose, { Schema, Document, model, models } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  password?: string; // Made optional for OAuth users
  provider?: string; // Added for authentication provider
  image?: string;    // Added for user profile image
}

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false, // Changed to false since OAuth users won't have passwords
  },
  provider: {
    type: String,
    required: false,
    enum: ['credentials', 'google', 'github'],
    default: 'credentials'
  },
  image: {
    type: String,
    required: false
  }
}, { timestamps: true });

// check model exists
const User = models.User || model<IUser>('User', UserSchema);

export default User;