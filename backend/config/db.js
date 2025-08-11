import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config()

const mongoUrl = process.env.MONGODB_URI
const dbName = process.env.DB_NAME

let db;

export const connectToMongoDB = async () => {
    if (!mongoUrl || !dbName) {
        throw new Error("Missing MONGODB_URI or DB_NAME in .env");
    }
    const client = new MongoClient(mongoUrl)
    await client.connect()
    db = client.db(dbName)
}

export const getDb = () => {
    if (!db) return ("DB not initialized. Call connectToMongoDB first.");
    return db
}