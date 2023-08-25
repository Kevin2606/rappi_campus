import connect from "../db/connectDB.js";
const db = (await connect()).collection("counters");

export default async function getNextSequenceValue(collectionName) {
    const sequenceDocument = await db.findOneAndUpdate(
        { _id: `${collectionName}ID` },
        { $inc: { sequence_value: 1 } },
        { returnOriginal: false }
    );
    return sequenceDocument.value.sequence_value;
}