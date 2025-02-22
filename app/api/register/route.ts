// app/api/register/route.ts
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { dbConnect } from "../../../lib/mongo";
import User from "../../../models/user-model";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, password } = body;

        if (!name || !email || !password) {
            return NextResponse.json(
                { error: "Missing required fields" }, 
                { status: 400 }
            );
        }

        await dbConnect();

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            provider: 'credentials'
        });

        return NextResponse.json({
            user: {
                id: user._id.toString(),
                name: user.name,
                email: user.email
            }
        }, { status: 201 });

    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { error: "Error creating user" },
            { status: 500 }
        );
    }
}