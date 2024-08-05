import mongoose, { ConnectOptions } from "mongoose";

type MongoDBOptions = ConnectOptions & {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
};

const mongoOptions: MongoDBOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 60000, 
  socketTimeoutMS: 60000,
};

export const connectDB = async (): Promise<void> => {
  try {
    const uri: string | undefined = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("MongoDB URI is not provided in environment variables");
    }

    const connect = await mongoose.connect(uri, mongoOptions);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error: any) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
}