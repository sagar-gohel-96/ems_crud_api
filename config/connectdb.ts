import { connect } from "mongoose";

const connectMongoDb = async () => {
  try {
    if (!'mongodb+srv://sagar:sagar1101G@cluster0.j61sot1.mongodb.net/?retryWrites=true&w=majority') throw new Error("mongoDbUrl not found");
    await connect('mongodb+srv://sagar:sagar1101g@cluster0.j61sot1.mongodb.net/?retryWrites=true&w=majority');
    console.log("mongoDb Connected !");
  } catch (error: any) {
    console.log("[DB] mongoDb couldn't connect : " + error.message);
  }
};

export { connectMongoDb };