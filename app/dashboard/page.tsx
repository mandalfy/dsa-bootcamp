import { NextResponse } from 'next/server';
import { dbConnect } from '../../../lib/mongo';
import User from '../../../models/user-model';  // Adjust the path as needed

export async function GET(request: Request) {
  try {
    // Get query parameters from the URL
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }
    
    await dbConnect();

    // Find the user in the database by id
    const user = await User.findById(userId).lean();

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    
    // For example, assume user has a progress property
    const progress = user.progress || {};

    return NextResponse.json({ 
      name: user.name,
      email: user.email,
      progress: progress 
    });
  } catch (error) {
    console.error("Profile GET error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}