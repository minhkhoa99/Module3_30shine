import mongoose from "mongoose";
//create type user Schema (lược đồ người dùng)
const userSchema = new mongoose.Schema(
  {
    userid: {
      type: Number,
    },
    location: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    address: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);
//export user from mongoose
export default mongoose.model("shop", userSchema);
