import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { SignUpModel } from "@/models/SignUpModel/signup.model";
import { connectDB } from "@/utils/connectDb";

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email and password are required" }),
        { status: 400 }
      );
    }

    const user = await SignUpModel.findOne({ email });
    if (!user) {
      return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        { status: 401 }
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "1h" }
    );

    return new Response(
      JSON.stringify({ token, userId: user._id, email: user.email }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error logging in:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}

// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
// import { SignUpModel } from "@/models/SignUpModel/signup.model";
// import { connectDB } from "@/utils/connectDb";

// export async function POST(request: Request) {
//   try {
//     await connectDB();
//     const body = await request.json();
//     const { email, password } = body;

//     if (!email || !password) {
//       return new Response(
//         JSON.stringify({ error: "Email and password are required" }),
//         { status: 400 }
//       );
//     }

//     const user = await SignUpModel.findOne({ email });

//     if (!user) {
//       return new Response(
//         JSON.stringify({ error: "Invalid email or password" }),
//         { status: 401 }
//       );
//     }

//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return new Response(
//         JSON.stringify({ error: "Invalid email or password" }),
//         { status: 401 }
//       );
//     }

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || "", {
//       expiresIn: "1h",
//     });

//     return new Response(JSON.stringify({ token }), { status: 200 });
//   } catch (error) {
//     console.error("Error logging in:", error);
//     return new Response(JSON.stringify({ error: "Internal server error" }), {
//       status: 500,
//     });
//   }
// }
