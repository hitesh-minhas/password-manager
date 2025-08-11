// imports and initial setup
import express from "express";
import { ObjectId } from "mongodb";
import { getDb } from "../config/db.js";

const router = express.Router()

// Routes
router.get("/", async (req, res) => {
    try {
        const db = getDb()
        let collection = db.collection("Passwords")
        let passwords = await collection.find({}).toArray()
        res.status(200).json(passwords);
    }
    catch (error) {
        console.error("Error fetching passwords: --->\n", error);
        res.status(500).send("Failed to fetch passwords");
    }
});

router.post("/", async (req, res) => {
    try {
        const db = getDb()
        const form = req.body;
        let collection = db.collection("Passwords")
        let insertResult = await collection.insertOne(form)
        console.log("Inserted: --->\n", insertResult.insertedId);
        res.status(201).send("Password stored successfully");

    } catch (error) {
        console.error("Error inserting password: --->\n", error);
        res.status(500).send("Failed to store password");
    }
});

router.put("/:id", async (req, res) => {
    try {
        const db = getDb();
        const id = req.params.id;
        const { url, username, password } = req.body;
        const result = await db.collection("Passwords").updateOne(
            { _id: new ObjectId(id) },
            { $set: { url, username, password } }
        );
        res.status(200).send("Password updated successfully");
    } catch (error) {
        console.error("Error updating password: --->\n", error);
        res.status(500).send("Failed to update password");
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const db = getDb();
        const id = req.params.id;
        const result = await db.collection("Passwords").deleteOne({ _id: new ObjectId(id) });
        res.status(200).send("Password deleted successfully");
    } catch (error) {
        console.error("Error deleting password: --->\n", error);
        res.status(500).send("Failed to delete password");
    }
});

export default router
