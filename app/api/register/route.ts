import { NextResponse } from "next/server";
import { createUser } from "../../../queries/users";

import bcrypt from 'bcrypt';
import { dbConnect } from "../../../lib/mongo";

export const POST = async (request: Request) => {
    try {
        const body = await request.json();
        const { name, email, password } = body;

        if (!name || !email || !password) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        //db connection
        await dbConnect();

        //excrypt pass
        const hashedPassword = await bcrypt.hash(password, 5);

        //db payload
        const newUser = {
            name,
            password: hashedPassword,
            email
        }

        //upadte
        await createUser(newUser);

        console.log("Received Data:", { name, email, password });

        return new NextResponse("User Created", { status: 201 });
    
        
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
};
