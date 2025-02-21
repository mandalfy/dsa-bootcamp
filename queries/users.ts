import User from "../models/user-model";

interface IUser {
  name: string;
  email: string;
  password: string;
}

export async function createUser(user: IUser): Promise<void> {
  try {
    await User.create(user);
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}
