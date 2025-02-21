import { NextResponse } from 'next/server'
import { connectDB } from '@/utils/db'
import User from '../../../models/user'

export async function GET(req: Request) {
  await connectDB()
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('userId')

  if (!userId) return NextResponse.json({ error: 'User ID required' }, { status: 400 })

  const user = await User.findById(userId)
  return NextResponse.json(user)
}

export async function POST(req: Request) {
  await connectDB()
  const { userId, day, completedTasks } = await req.json()

  const user = await User.findById(userId)
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

  user.progress[day] = completedTasks
  await user.save()

  return NextResponse.json({ message: 'Progress updated' })
}
