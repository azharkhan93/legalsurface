import mongoose, { Document, Schema, Model } from "mongoose";

// Define the Auth interface
export interface Auth extends Document {
  username: string;
  email: string;
  password: string;
  otp: string | null;
  otpExpiration: Date | null;
}

const SignUpSchema: Schema<Auth> = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    otp: { type: String, default: null },
    otpExpiration: { type: Date, default: null },
  },
  { timestamps: true }
);

export const SignUpModel: Model<Auth> =
  mongoose.models.SignUp || mongoose.model<Auth>("SignUp", SignUpSchema);
