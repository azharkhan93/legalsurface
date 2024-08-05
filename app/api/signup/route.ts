import bcrypt from "bcryptjs";
import { SignUpModel } from "@/models/SignUpModel/signup.model";
import { connectDB } from "@/utils/connectDb";

export async function POST(request: Request) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
    });
  }

  try {
    await connectDB();
    const body = await request.json();
    const { username, email, password } = body;

    if (!username || !email || !password) {
      return new Response(
        JSON.stringify({error: "Name, email, and password are required" }),
        { status: 400 }
      );
    }
 const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new SignUpModel({ username, email, password: hashedPassword });
    await newUser.save();
        
    return new Response(JSON.stringify({ message: "User added successfully" }), { status: 200 });

    
  
} catch (error) {
    console.error("Error adding rooms:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}

