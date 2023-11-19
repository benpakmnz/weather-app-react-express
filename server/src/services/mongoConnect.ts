import mongoose from "mongoose";

class mongoConnect {
  connect = async () => {
    if (!process.env.MONGO_URI) {
      throw new Error("MONOGO_URI must be defined");
    }

    try {
      return await mongoose.connect(process.env.MONGO_URI);
      console.log("connected");
    } catch (err) {
      console.log(err);
    }
  };
}

export default mongoConnect;
