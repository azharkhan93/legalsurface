import mongoose, { Document, Schema, Model } from "mongoose";

export interface Auth extends Document {
  name: string;
  email: string;
  password: string;
  otp: string | null;
  otpExpiration: Date | null;
}

const SignUpSchema: Schema<Auth> = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    otp: { type: String, default: null },
    otpExpiration: { type: Date, default: null },
  },
  { timestamps: true }
);

export const SignupModel: Model<Auth> =
  mongoose.models.Auth|| mongoose.model<Auth>("SignUp", SignUpSchema);