import mongoose, { Schema, Document, model, models } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
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
    required: true,
  },
}, { timestamps: true });

//check model exists
const User = models.User || model<IUser>('User', UserSchema);

export default User;
