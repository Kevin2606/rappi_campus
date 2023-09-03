import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

export default async function connect() {
  try {
    const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@${process.env.ATLAS_CLUSTER}/${process.env.ATLAS_DB}`;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    const client = await new MongoClient(uri, options).connect();
    return client;
  } catch (error) {
    return {status: 500, message: error};
  }
}